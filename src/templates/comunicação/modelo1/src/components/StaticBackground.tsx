
export default function StaticBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Subtle overlay pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #5227FF 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #00ff87 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #ff006e 0%, transparent 50%)`
        }}
      />
      
      {/* Simple overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </div>
  );
}
