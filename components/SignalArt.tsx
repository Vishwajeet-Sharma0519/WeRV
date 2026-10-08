/** Abstract visual language only; these shapes contain no measured geospatial data. */
export function SignalArt({ variant }: { variant: 'terrain' | 'orbit' | 'layers' | 'horizon' }) {
  return (
    <svg
      className={`signal-art art-${variant}`}
      viewBox="0 0 600 350"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor">
        {variant === 'terrain' && (
          <>
            {Array.from({ length: 15 }, (_, i) => (
              <path
                key={i}
                opacity={0.2 + i * 0.035}
                d={`M30 ${140 + i * 10} C120 ${70 + i * 10},160 ${210 + i * 4},260 ${120 + i * 9} S410 ${60 + i * 14},570 ${130 + i * 10}`}
              />
            ))}
            <path d="M90 130V265M300 100V290M510 125V270" strokeDasharray="3 6" opacity=".5" />
            <ellipse cx="300" cy="230" rx="135" ry="42" strokeDasharray="4 7" />
            <circle cx="300" cy="110" r="6" fill="currentColor" />
            <circle cx="90" cy="138" r="4" fill="currentColor" />
            <circle cx="510" cy="120" r="4" fill="currentColor" />
          </>
        )}
        {variant === 'orbit' && (
          <>
            <circle cx="300" cy="175" r="112" opacity=".65" />
            <ellipse cx="300" cy="175" rx="55" ry="112" opacity=".3" />
            <ellipse cx="300" cy="175" rx="94" ry="112" opacity=".2" />
            {[125, 175, 225].map((y) => (
              <ellipse key={y} cx="300" cy={y} rx={y === 175 ? 112 : 100} ry="24" opacity=".3" />
            ))}
            <ellipse
              cx="300"
              cy="175"
              rx="215"
              ry="69"
              transform="rotate(-28 300 175)"
              opacity=".65"
            />
            <ellipse
              cx="300"
              cy="175"
              rx="180"
              ry="145"
              transform="rotate(20 300 175)"
              strokeDasharray="2 9"
              opacity=".3"
            />
            <g className="orbit-satellite">
              <circle cx="481" cy="86" r="6" fill="currentColor" />
              <path d="M469 72l25 28m-34-12 43-19" strokeWidth="3" />
            </g>
            <circle cx="265" cy="164" r="5" fill="currentColor" />
            <circle className="orbit-target" cx="265" cy="164" r="18" opacity=".4" />
          </>
        )}
        {variant === 'layers' && (
          <>
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(0 ${i * 42})`}>
                <path
                  d="M120 110 300 35 480 110 300 185Z"
                  fill="currentColor"
                  fillOpacity=".035"
                  opacity={1 - i * 0.16}
                />
                <path d="M160 110 300 52 440 110M210 130 345 72M265 154 400 95" opacity=".2" />
              </g>
            ))}
            <path d="M300 35V311" strokeDasharray="3 7" opacity=".65" />
          </>
        )}
        {variant === 'horizon' && (
          <>
            {[70, 120, 170, 220, 270].map((y) => (
              <path key={y} d={`M60 ${y}H540`} opacity=".13" />
            ))}
            <path
              d="M60 270C140 270 160 180 240 200S340 110 410 130 480 90 540 65"
              strokeWidth="2"
            />
            <path
              d="M60 270C140 270 160 190 240 220S340 150 410 180 480 160 540 170"
              opacity=".4"
              strokeDasharray="5 7"
            />
            <circle cx="410" cy="130" r="6" fill="currentColor" />
            <circle cx="410" cy="130" r="22" opacity=".35" />
            <path d="M410 45V290" strokeDasharray="3 7" opacity=".4" />
          </>
        )}
      </g>
    </svg>
  );
}
