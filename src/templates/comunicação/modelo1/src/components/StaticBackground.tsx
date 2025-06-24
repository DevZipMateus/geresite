
import Aurora from "./Aurora";

export default function StaticBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <Aurora
        colorStops={["#0f172a", "#1e293b", "#334155"]}
        amplitude={0.8}
        blend={0.6}
        speed={0.5}
      />
    </div>
  );
}
