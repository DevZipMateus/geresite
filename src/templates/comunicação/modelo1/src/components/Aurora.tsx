
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef, useState } from "react";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision mediump float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uQuality;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \
  int index = 0;                                            \
  for (int i = 0; i < 2; i++) {                               \
     ColorStop currentColor = colors[i];                    \
     bool isInBetween = currentColor.position <= factor;    \
     index = int(mix(float(index), float(i), float(isInBetween))); \
  }                                                         \
  ColorStop currentColor = colors[index];                   \
  ColorStop nextColor = colors[index + 1];                  \
  float range = nextColor.position - currentColor.position; \
  float lerpFactor = (factor - currentColor.position) / range; \
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);
  
  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);
  
  float noiseScale = mix(1.0, 2.0, uQuality);
  float timeScale = mix(0.05, 0.1, uQuality);
  
  float height = snoise(vec2(uv.x * noiseScale + uTime * timeScale, uTime * 0.15)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;
  
  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
  
  vec3 auroraColor = intensity * rampColor;
  
  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

// Performance monitoring hook
const usePerformanceMonitor = () => {
  const [quality, setQuality] = useState(1.0);
  const frameTimesRef = useRef<number[]>([]);
  const lastFrameTimeRef = useRef(performance.now());

  const updatePerformance = () => {
    const now = performance.now();
    const frameTime = now - lastFrameTimeRef.current;
    lastFrameTimeRef.current = now;

    frameTimesRef.current.push(frameTime);
    if (frameTimesRef.current.length > 60) {
      frameTimesRef.current.shift();
    }

    if (frameTimesRef.current.length >= 30) {
      const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b) / frameTimesRef.current.length;
      const fps = 1000 / avgFrameTime;

      if (fps < 45 && quality > 0.3) {
        setQuality(prev => Math.max(0.3, prev - 0.1));
      } else if (fps > 55 && quality < 1.0) {
        setQuality(prev => Math.min(1.0, prev + 0.05));
      }
    }
  };

  return { quality, updatePerformance };
};

export default function Aurora(props: AuroraProps) {
  const {
    colorStops = ["#5227FF", "#7cff67", "#5227FF"],
    amplitude = 1.0,
    blend = 0.5
  } = props;
  
  const propsRef = useRef(props);
  propsRef.current = props;
  const ctnDom = useRef<HTMLDivElement>(null);
  const { quality, updatePerformance } = usePerformanceMonitor();

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    // Check device capabilities
    const isLowEnd = navigator.hardwareConcurrency <= 4 || 
                     (navigator as any).deviceMemory <= 4 ||
                     /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const baseQuality = isLowEnd ? 0.5 : 1.0;
    const targetFPS = isLowEnd ? 30 : 60;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: !isLowEnd,
      powerPreference: "high-performance"
    });
    
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = 'transparent';

    let program: Program;
    let lastTime = 0;
    const frameInterval = 1000 / targetFPS;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      
      // Scale resolution based on quality and device
      const scale = Math.min(quality * baseQuality, 1.0);
      const scaledWidth = Math.floor(width * scale);
      const scaledHeight = Math.floor(height * scale);
      
      renderer.setSize(scaledWidth, scaledHeight);
      gl.canvas.style.width = width + 'px';
      gl.canvas.style.height = height + 'px';
      
      if (program) {
        program.uniforms.uResolution.value = [scaledWidth, scaledHeight];
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(ctn);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete geometry.attributes.uv;
    }

    const colorStopsArray = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [ctn.offsetWidth * quality * baseQuality, ctn.offsetHeight * quality * baseQuality] },
        uBlend: { value: blend },
        uQuality: { value: quality * baseQuality }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (currentTime: number) => {
      animateId = requestAnimationFrame(update);
      
      // FPS limiting
      if (currentTime - lastTime < frameInterval) {
        return;
      }
      
      updatePerformance();
      
      const { time = currentTime * 0.001, speed = 1.0 } = propsRef.current;
      
      // Update uniforms
      program.uniforms.uTime.value = time * speed * 0.1;
      program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? 1.0;
      program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
      program.uniforms.uQuality.value = quality * baseQuality;
      
      const stops = propsRef.current.colorStops ?? colorStops;
      program.uniforms.uColorStops.value = stops.map((hex) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
      });
      
      renderer.render({ scene: mesh });
      lastTime = currentTime;
    };
    
    animateId = requestAnimationFrame(update);
    resize();

    return () => {
      cancelAnimationFrame(animateId);
      resizeObserver.disconnect();
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, blend, colorStops, quality]);

  return <div ref={ctnDom} className="w-full h-full" />;
}
