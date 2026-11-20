// Project-specific illustration for "Mini-Jira AWS": a Jira-style task board
// (the app) wired to its real AWS stack - CloudFront, Lambda, DynamoDB, S3 -
// drawn with authentic AWS service colors and animated data-flow links.

const C = {
  cloudfront: '#8C4FFF', // networking / CDN - purple
  lambda: '#ED7100', // compute - orange
  dynamo: '#4D72F3', // database - blue
  s3: '#4CA72B', // storage - green
}

function FlowLink({ d, color }: { d: string; color: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.6"
      strokeDasharray="4 6"
    >
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.3s" repeatCount="indefinite" />
    </path>
  )
}

function Node({
  x,
  y,
  color,
  label,
  children,
}: {
  x: number
  y: number
  color: string
  label: string
  children: React.ReactNode
}) {
  return (
    <g>
      <circle cx={x} cy={y} r="26" fill={color} opacity="0.22" filter="url(#softBlur)" />
      <circle cx={x} cy={y} r="21" fill="#0E1014" stroke={color} strokeWidth="2" />
      {children}
      <text
        x={x}
        y={y + 36}
        textAnchor="middle"
        fontSize="7.5"
        letterSpacing="1.6"
        fontWeight="600"
        fill="rgba(215,226,234,0.6)"
      >
        {label}
      </text>
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
        <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
        <radialGradient id="awsAmbient" cx="50%" cy="46%" r="60%">
          <stop offset="0%" stopColor="rgba(237,113,0,0.10)" />
          <stop offset="100%" stopColor="rgba(237,113,0,0)" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="480" height="340" fill="url(#awsAmbient)" />

      {/* AWS cloud boundary */}
      <path
        d="M150 250 q-34 0 -34 -30 q0 -26 28 -28 q6 -34 44 -34 q30 0 40 24 q10 -8 24 -8 q28 0 30 28 q26 2 26 26 q0 24 -30 24 Z"
        fill="rgba(237,113,0,0.04)"
        stroke="rgba(237,113,0,0.35)"
        strokeWidth="1.4"
        strokeLinejoin="round"
        transform="translate(72 -4) scale(0.72)"
      />

      {/* flow links (behind nodes) */}
      <FlowLink d="M175 150 C 140 128, 118 118, 104 104" color={C.cloudfront} />
      <FlowLink d="M305 150 C 340 128, 362 118, 376 104" color={C.lambda} />
      <FlowLink d="M175 214 C 140 236, 118 246, 104 258" color={C.dynamo} />
      <FlowLink d="M305 214 C 340 236, 362 246, 376 258" color={C.s3} />

      {/* ---- The app: a Mini-Jira kanban board ---- */}
      <g>
        <rect x="178" y="128" width="124" height="108" rx="12" fill="#14161B" stroke="rgba(215,226,234,0.22)" strokeWidth="1.3" />
        {/* title bar */}
        <circle cx="189" cy="139" r="2" fill="#ED7100" />
        <circle cx="196" cy="139" r="2" fill="#4D72F3" />
        <circle cx="203" cy="139" r="2" fill="#4CA72B" />
        <rect x="178" y="146" width="124" height="1" fill="rgba(215,226,234,0.12)" />
        {/* columns of task cards */}
        {[
          { cx: 198, color: '#ED7100' },
          { cx: 240, color: '#4D72F3' },
          { cx: 282, color: '#4CA72B' },
        ].map((col, ci) =>
          [0, 1, 2].map((r) => (
            <rect
              key={`${ci}-${r}`}
              x={col.cx - 17}
              y={156 + r * 20}
              width="34"
              height="13"
              rx="3"
              fill={col.color}
              opacity={r === 2 && ci !== 1 ? 0.28 : 0.55 - r * 0.1}
            />
          )),
        )}
      </g>

      {/* ---- AWS service nodes ---- */}
      {/* CloudFront - globe */}
      <Node x={100} y={100} color={C.cloudfront} label="CLOUDFRONT">
        <g stroke={C.cloudfront} strokeWidth="1.6" fill="none">
          <circle cx="100" cy="100" r="8.5" />
          <ellipse cx="100" cy="100" rx="3.6" ry="8.5" />
          <line x1="91.5" y1="100" x2="108.5" y2="100" />
        </g>
      </Node>

      {/* Lambda - lambda glyph */}
      <Node x={380} y={100} color={C.lambda} label="LAMBDA">
        <text x="380" y="107" textAnchor="middle" fontSize="20" fontWeight="800" fill={C.lambda}>
          &#955;
        </text>
      </Node>

      {/* DynamoDB - stacked cylinder */}
      <Node x={100} y={262} color={C.dynamo} label="DYNAMODB">
        <g stroke={C.dynamo} strokeWidth="1.6" fill="none">
          <ellipse cx="100" cy="255" rx="8" ry="3" />
          <path d="M92 255 v12 a8 3 0 0 0 16 0 v-12" />
          <path d="M92 261 a8 3 0 0 0 16 0" />
        </g>
      </Node>

      {/* S3 - bucket */}
      <Node x={380} y={262} color={C.s3} label="S3">
        <g stroke={C.s3} strokeWidth="1.6" fill="none" strokeLinejoin="round">
          <path d="M372 255 h16 l-2 15 a6 2.4 0 0 1 -12 0 Z" />
          <ellipse cx="380" cy="255" rx="8" ry="2.4" />
        </g>
      </Node>

      {/* data packets travelling (subtle) */}
      <circle r="2.3" fill={C.cloudfront}>
        <animateMotion dur="1.3s" repeatCount="indefinite" path="M175 150 C 140 128, 118 118, 104 104" />
      </circle>
      <circle r="2.3" fill={C.s3}>
        <animateMotion dur="1.3s" repeatCount="indefinite" path="M305 214 C 340 236, 362 246, 376 258" />
      </circle>
    </svg>
  )
}
