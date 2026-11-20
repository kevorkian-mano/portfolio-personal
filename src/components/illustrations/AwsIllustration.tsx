// Bespoke isometric "cloud infrastructure" scene for the Mini-Jira AWS project.
// Pure SVG, matched to the site's gradient palette, scales crisply to any size.

function Cube({ cx, topY, w, h, depth }: { cx: number; topY: number; w: number; h: number; depth: number }) {
  const top = `${cx},${topY} ${cx + w},${topY + h} ${cx},${topY + 2 * h} ${cx - w},${topY + h}`
  const left = `${cx - w},${topY + h} ${cx - w},${topY + h + depth} ${cx},${topY + 2 * h + depth} ${cx},${topY + 2 * h}`
  const right = `${cx + w},${topY + h} ${cx + w},${topY + h + depth} ${cx},${topY + 2 * h + depth} ${cx},${topY + 2 * h}`
  return (
    <g stroke="url(#coverGrad)" strokeWidth="1.3" strokeLinejoin="round">
      <polygon points={left} fill="rgba(215,226,234,0.05)" />
      <polygon points={right} fill="rgba(215,226,234,0.11)" />
      <polygon points={top} fill="url(#awsCubeTop)" />
    </g>
  )
}

export default function AwsIllustration() {
  return (
    <svg
      viewBox="0 0 480 340"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="awsCubeTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(215,226,234,0.30)" />
          <stop offset="100%" stopColor="rgba(215,226,234,0.10)" />
        </linearGradient>
        <radialGradient id="awsGlow" cx="50%" cy="34%" r="55%">
          <stop offset="0%" stopColor="rgba(187,204,215,0.18)" />
          <stop offset="100%" stopColor="rgba(187,204,215,0)" />
        </radialGradient>
        <radialGradient id="awsPurple" cx="82%" cy="14%" r="40%">
          <stop offset="0%" stopColor="rgba(118,33,176,0.22)" />
          <stop offset="100%" stopColor="rgba(118,33,176,0)" />
        </radialGradient>
      </defs>

      {/* ambient glows */}
      <rect x="0" y="0" width="480" height="340" fill="url(#awsGlow)" />
      <rect x="0" y="0" width="480" height="340" fill="url(#awsPurple)" />

      {/* grounding ellipse */}
      <ellipse cx="240" cy="250" rx="150" ry="34" fill="none" stroke="rgba(215,226,234,0.10)" strokeWidth="1" />

      {/* cloud */}
      <g transform="translate(144,8) scale(8)">
        <path
          d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
          fill="rgba(215,226,234,0.05)"
          stroke="url(#coverGrad)"
          strokeWidth="0.3"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      {/* connector cloud -> stack */}
      <line x1="240" y1="150" x2="240" y2="176" stroke="rgba(215,226,234,0.35)" strokeWidth="1" strokeDasharray="2 4" />
      <rect x="236" y="158" width="8" height="8" rx="1.5" transform="rotate(45 240 162)" fill="#BBCCD7" opacity="0.85" />

      {/* isometric cubes: center compute + two availability-zone nodes */}
      <Cube cx={190} cy={0} topY={206} w={30} h={15} depth={26} />
      <Cube cx={290} cy={0} topY={206} w={30} h={15} depth={26} />
      <Cube cx={240} cy={0} topY={176} w={34} h={17} depth={30} />

      {/* service links */}
      <line x1="210" y1="212" x2="230" y2="202" stroke="rgba(215,226,234,0.25)" strokeWidth="1" strokeDasharray="2 4" />
      <line x1="270" y1="212" x2="250" y2="202" stroke="rgba(215,226,234,0.25)" strokeWidth="1" strokeDasharray="2 4" />

      {/* floating service nodes */}
      <circle cx="110" cy="130" r="4" fill="#BBCCD7" opacity="0.8" />
      <circle cx="372" cy="150" r="4" fill="#7621B0" opacity="0.9" />
      <circle cx="400" cy="230" r="3" fill="#BBCCD7" opacity="0.6" />
      <circle cx="86" cy="210" r="3" fill="#BBCCD7" opacity="0.6" />
      <line x1="110" y1="130" x2="176" y2="150" stroke="rgba(215,226,234,0.15)" strokeWidth="1" strokeDasharray="2 5" />
      <line x1="372" y1="150" x2="300" y2="150" stroke="rgba(118,33,176,0.3)" strokeWidth="1" strokeDasharray="2 5" />
    </svg>
  )
}
