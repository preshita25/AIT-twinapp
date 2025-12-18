import { useMemo } from "react";

const skills = [
  { name: "Math", value: 85 },
  { name: "Science", value: 72 },
  { name: "English", value: 90 },
  { name: "Logic", value: 88 },
  { name: "Creativity", value: 75 },
  { name: "Social", value: 68 },
];

export function SkillRadar() {
  const { points, labelPositions } = useMemo(() => {
    const centerX = 100;
    const centerY = 100;
    const radius = 70;
    const angleStep = (2 * Math.PI) / skills.length;

    const pts = skills.map((skill, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const r = (skill.value / 100) * radius;
      return {
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle),
      };
    });

    const labels = skills.map((skill, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const labelRadius = radius + 20;
      return {
        x: centerX + labelRadius * Math.cos(angle),
        y: centerY + labelRadius * Math.sin(angle),
        name: skill.name,
        value: skill.value,
      };
    });

    return { points: pts, labelPositions: labels };
  }, []);

  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  // Grid circles
  const gridCircles = [25, 50, 75, 100].map((percent) => (
    <circle
      key={percent}
      cx={100}
      cy={100}
      r={(percent / 100) * 70}
      fill="none"
      stroke="hsl(var(--border))"
      strokeWidth="1"
      opacity={0.5}
    />
  ));

  // Grid lines
  const gridLines = skills.map((_, i) => {
    const angle = ((2 * Math.PI) / skills.length) * i - Math.PI / 2;
    const x = 100 + 70 * Math.cos(angle);
    const y = 100 + 70 * Math.sin(angle);
    return (
      <line
        key={i}
        x1={100}
        y1={100}
        x2={x}
        y2={y}
        stroke="hsl(var(--border))"
        strokeWidth="1"
        opacity={0.5}
      />
    );
  });

  return (
    <div className="relative">
      <svg viewBox="0 0 200 200" className="w-full max-w-[250px] mx-auto">
        {/* Grid */}
        {gridCircles}
        {gridLines}

        {/* Skill area */}
        <path
          d={pathD}
          fill="hsl(var(--primary) / 0.2)"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          className="transition-all duration-500"
        />

        {/* Data points */}
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--background))"
            strokeWidth="2"
          />
        ))}

        {/* Labels */}
        {labelPositions.map((label, i) => (
          <g key={i}>
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-foreground text-[10px] font-medium"
            >
              {label.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">{skill.name}: {skill.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
