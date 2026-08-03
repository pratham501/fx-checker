import { useHistoryStore } from "@/stores/HistoryStore";
import React from "react";

const Stats = () => {
  const { change, percentageChange } = useHistoryStore();

  return (
    <div className="flex gap-2.5 ">
      <div className="shrink-0 flex flex-col gap-3 px-5 py-3 bg-neutral-700 rounded-[1rem] ">
        <p className="uppercase text-neutral-400  text-[0.875rem] tracking-3 ">
          change
        </p>
        <p className="text-neutral-50 text-[1.25rem] tracking-1">
          {change > 0 ? `+${change}` : change}
        </p>
      </div>
      <div className="shrink-0 flex flex-col gap-3 px-5 py-3 bg-neutral-700 rounded-[1rem] ">
        <p className="uppercase text-neutral-400 text-[0.875rem] tracking-3 ">
          % change
        </p>
        <p className="text-neutral-50 text-[1.25rem] tracking-1 ">
          {percentageChange > 0
            ? `+${percentageChange}%`
            : `${percentageChange}%`}
        </p>
      </div>
    </div>
  );
};

export default Stats;
