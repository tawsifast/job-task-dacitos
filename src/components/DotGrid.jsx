"use client";

const colors = {
  "slate-300": "#cbd5e1",
  "slate-400": "#94a3b8",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
};

const dotSizePx = { sm: 4, md: 6, lg: 8 };
const spacingPx = { sm: 20, md: 28, lg: 36 };

export default function DotGrid({
  rows = 6,
  cols = 8,
  dotSize = "md",
  className = "",
  floating = true,
  color = "slate-300",
}) {
  const fillColor = colors[color] || colors["slate-300"];
  const dotR = dotSizePx[dotSize] / 2;
  const spacing = spacingPx[dotSize];
  const patternW = cols * spacing;
  const patternH = rows * spacing;

  if (!floating) {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${patternW} ${patternH}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern
            id={`dot-pattern-${dotSize}-${color}`}
            x="0"
            y="0"
            width={spacing}
            height={spacing}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={spacing / 2} cy={spacing / 2} r={dotR} fill={fillColor} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dot-pattern-${dotSize}-${color})`} />
      </svg>
    );
  }

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${patternW} ${patternH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-float-vertical ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern
          id={`dot-pattern-${dotSize}-${color}`}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={dotR} fill={fillColor} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dot-pattern-${dotSize}-${color})`} />
    </svg>
  );
}
