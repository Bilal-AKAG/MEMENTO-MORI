import React, { useMemo } from "react";
import { LifeData } from "../types";

interface WeeksGridProps {
  data: LifeData;
}

const WeeksGrid: React.FC<WeeksGridProps> = ({ data }) => {
  const weeks = useMemo(() => {
    // Cap rendering at 100 years to prevent browser crash on extreme edge cases
    const safeTotal = Math.min(data.weeksTotal, 5200);
    return Array.from({ length: safeTotal }, (_, i) => ({
      id: i,
      isLived: i < data.weeksLived,
      // Highlight the current week
      isCurrent: i === data.weeksLived,
    }));
  }, [data.weeksTotal, data.weeksLived]);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-between mb-4 font-mono text-xs text-neutral-500 uppercase tracking-wider">
        <span>Birth</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-terminal-red opacity-20"></span> Lived
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-white animate-pulse"></span> Now
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-neutral-800"></span> Remaining
          </span>
        </div>
        <span>Death (Est.)</span>
      </div>

      {/*
                We use a flex layout with wrap instead of CSS Grid for the specific 'GitHub contribution' aesthetic
                where items flow naturally. 52 columns is hard to force responsibly on mobile, so we allow wrap.
                On large screens, we can try to enforce approx 52 cols width.
            */}
      <div
        className="flex flex-wrap content-start gap-[3px] opacity-90"
        style={{ maxWidth: "100%" }}
      >
        {weeks.map((week) => (
          <div
            key={week.id}
            className={`
                            w-[5px] h-[5px] sm:w-[6px] sm:h-[6px]
                            rounded-[1px] transition-all duration-300
                            ${
                              week.isCurrent
                                ? "bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"
                                : week.isLived
                                  ? "bg-terminal-red opacity-80 hover:opacity-100 hover:scale-125"
                                  : "bg-neutral-900 hover:bg-neutral-700"
                            }
                        `}
            title={week.isCurrent ? "Current Week" : `Week ${week.id + 1}`}
          />
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-dashed border-neutral-800 font-mono text-xs text-neutral-600 flex justify-between">
        <p>Grid represents your estimated lifespan in weeks.</p>
        <p>{data.weeksTotal} squares total.</p>
      </div>
    </div>
  );
};

export default WeeksGrid;
