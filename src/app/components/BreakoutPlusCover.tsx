export default function BreakoutPlusCover() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Game elements container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 400 500" className="w-full h-full max-w-md">
          {/* Bricks at top */}
          <g>
            {/* Row 1 */}
            <rect x="80" y="80" width="60" height="20" rx="2" fill="#ef4444" className="drop-shadow-lg" />
            <rect x="145" y="80" width="60" height="20" rx="2" fill="#f59e0b" className="drop-shadow-lg" />
            <rect x="210" y="80" width="60" height="20" rx="2" fill="#10b981" className="drop-shadow-lg" />
            <rect x="275" y="80" width="60" height="20" rx="2" fill="#3b82f6" className="drop-shadow-lg" />

            {/* Row 2 */}
            <rect x="80" y="105" width="60" height="20" rx="2" fill="#8b5cf6" className="drop-shadow-lg" />
            <rect x="145" y="105" width="60" height="20" rx="2" fill="#ec4899" className="drop-shadow-lg" />
            <rect x="210" y="105" width="60" height="20" rx="2" fill="#06b6d4" className="drop-shadow-lg" />
            <rect x="275" y="105" width="60" height="20" rx="2" fill="#f59e0b" className="drop-shadow-lg" />
          </g>

          {/* Ball with glow and motion trail */}
          <defs>
            <radialGradient id="ballGlow" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Motion trail */}
          <circle cx="235" cy="290" r="8" fill="#06b6d4" opacity="0.15" />
          <circle cx="225" cy="305" r="8" fill="#06b6d4" opacity="0.25" />
          <circle cx="215" cy="320" r="8" fill="#06b6d4" opacity="0.4" />

          {/* Ball glow */}
          <circle cx="205" cy="335" r="20" fill="url(#ballGlow)" opacity="0.6" />

          {/* Ball */}
          <circle cx="205" cy="335" r="8" fill="#06b6d4" filter="url(#glow)" />
          <circle cx="205" cy="335" r="8" fill="#22d3ee" opacity="0.8" />

          {/* Paddle with glow */}
          <defs>
            <linearGradient id="paddleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>

          <rect x="165" y="430" width="70" height="12" rx="6" fill="#8b5cf6" opacity="0.3" className="blur-sm" />
          <rect x="165" y="430" width="70" height="12" rx="6" fill="url(#paddleGradient)" filter="url(#glow)" />
        </svg>
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950/90 to-transparent">
        <h3 className="text-3xl text-white mb-2">
          Breakout Plus
        </h3>
        <p className="text-slate-400">
          Arcade Game with Dynamic Power-Up System
        </p>
      </div>

      {/* Scanline effect for arcade feel */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}></div>
      </div>
    </div>
  );
}
