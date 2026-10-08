export function RegionMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`region-map ${compact ? 'compact' : ''}`}>
      <svg
        viewBox="0 0 640 440"
        role="img"
        aria-labelledby={compact ? 'mini-map-title' : 'map-title'}
      >
        <title id={compact ? 'mini-map-title' : 'map-title'}>
          Schematic regional locator highlighting Punjab and Haryana in north-west India. Not
          administrative boundaries or measured risk.
        </title>
        <defs>
          <pattern
            id={compact ? 'mini-grid' : 'region-grid'}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#456069" strokeWidth=".6" />
          </pattern>
        </defs>
        <rect width="640" height="440" fill={`url(#${compact ? 'mini-grid' : 'region-grid'})`} />
        <g className="region-scan" aria-hidden="true">
          <path d="M20 40H620" stroke="#b6e5b1" strokeOpacity=".35" />
          <path d="M20 34v12M620 34v12" stroke="#b6e5b1" strokeOpacity=".65" />
        </g>
        <g fill="none" stroke="#415c63" strokeWidth="1">
          <ellipse cx="320" cy="220" rx="228" ry="160" />
          <ellipse cx="320" cy="220" rx="170" ry="117" />
          <path d="M0 330Q160 190 290 300T640 260M0 170Q180 310 370 115T640 170M150 0Q320 180 250 440M400 0Q300 280 530 440" />
        </g>
        <path
          d="M233 72 312 88 359 149 324 215 243 203 204 153Z"
          fill="#a8dfac"
          fillOpacity=".18"
          stroke="#b6e5b1"
        />
        <path
          d="M324 215 359 149 398 181 420 269 372 340 305 300 291 248Z"
          fill="#a8dfac"
          fillOpacity=".09"
          stroke="#97bfa8"
        />
        <circle cx="277" cy="146" r="5" fill="#c8f7bc" />
        <circle cx="354" cy="252" r="5" fill="#c8f7bc" />
        <g fill="#eef7f1" fontSize="17" fontFamily="Arial, sans-serif">
          <text x="255" y="130">
            PUNJAB
          </text>
          <text x="373" y="250">
            HARYANA
          </text>
        </g>
        <g fill="#8ea8af" fontSize="12" fontFamily="Arial, sans-serif">
          <text x="30" y="32">
            NORTH-WEST INDIA
          </text>
          <text x="30" y="411">
            REGIONAL SCHEMATIC · NOT TO SCALE
          </text>
          <text x="510" y="32">
            N ↑
          </text>
        </g>
        <path d="M277 146Q200 240 160 340" fill="none" stroke="#a5c3a8" strokeDasharray="4 7" />
        <text x="70" y="370" fill="#9baeb4" fontSize="13">
          Rajasthan / future exploration
        </text>
      </svg>
    </div>
  );
}
