import { Award, Star, TrendingUp, BookOpen } from "lucide-react";

const timelineData = [
  {
    year: "Grade 1",
    grade: "A",
    highlight: "Class Topper",
    icon: Star,
    color: "bg-primary",
  },
  {
    year: "Grade 2",
    grade: "A",
    highlight: "Art Competition Winner",
    icon: Award,
    color: "bg-secondary",
  },
  {
    year: "Grade 3",
    grade: "A+",
    highlight: "Math Olympiad",
    icon: TrendingUp,
    color: "bg-accent",
  },
  {
    year: "Grade 4",
    grade: "A",
    highlight: "Science Fair",
    icon: BookOpen,
    color: "bg-primary",
  },
  {
    year: "Grade 5",
    grade: "A+",
    highlight: "Quiz Champion",
    icon: Star,
    color: "bg-secondary",
  },
  {
    year: "Grade 6",
    grade: "A",
    highlight: "Coding Workshop",
    icon: TrendingUp,
    color: "bg-accent",
  },
  {
    year: "Grade 7",
    grade: "A+",
    highlight: "Sports Day Captain",
    icon: Award,
    color: "bg-primary",
  },
  {
    year: "Grade 8",
    grade: "Ongoing",
    highlight: "Current Year",
    icon: Star,
    color: "gradient-hero",
    current: true,
  },
];

export function ProgressTimeline() {
  return (
    <div className="relative">
      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 -mx-6 px-6">
        <div className="flex items-end gap-1 min-w-max">
          {timelineData.map((item, index) => {
            const height = item.current ? 120 : 60 + Math.random() * 50;
            
            return (
              <div key={index} className="flex flex-col items-center gap-2 group">
                {/* Bar */}
                <div
                  className={`relative w-12 rounded-t-lg transition-all duration-300 group-hover:scale-105 ${
                    item.current ? "gradient-hero shadow-glow" : item.color
                  }`}
                  style={{ height: `${height}px` }}
                >
                  {/* Icon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card shadow-card flex items-center justify-center">
                    <item.icon className={`w-4 h-4 ${item.current ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    <div className="bg-card border border-border rounded-lg shadow-card p-3 text-center whitespace-nowrap">
                      <p className="font-semibold text-sm">{item.highlight}</p>
                      <p className="text-xs text-muted-foreground">{item.grade}</p>
                    </div>
                  </div>
                </div>
                
                {/* Year label */}
                <div className={`text-xs font-medium ${item.current ? "text-primary" : "text-muted-foreground"}`}>
                  {item.year}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary" />
            <span>Academic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-secondary" />
            <span>Creative</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent" />
            <span>Skills</span>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">Hover for details</span>
      </div>
    </div>
  );
}
