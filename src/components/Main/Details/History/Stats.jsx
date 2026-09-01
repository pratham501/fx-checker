import { useHistoryStore } from "@/stores/HistoryStore";
import { Triangle } from "lucide-react";
import React from "react";
import { useEffect } from "react";

const Stats = () => {
  const { change, percentageChange } = useHistoryStore();
  const roundedChange = change.toFixed(4);

  return (
    <div className="flex gap-2.5 ">
      <div className="shrink-0 flex flex-col gap-2 px-5 py-3 bg-neutral-700 border border-neutral-600 rounded-[1rem] ">
        <p className="uppercase text-neutral-50/70  text-[0.875rem] tracking-3 ">
          change
        </p>
        <p
          className={` text-[1.25rem] tracking-1 ${
            change >= 0 ? "text-profit" : "text-loss"
          }`}
        >
          {roundedChange * 1 == 0
            ? (roundedChange * 1).toFixed(4)
            : change < 0
            ? roundedChange
            : `+${roundedChange}`}
        </p>
      </div>
      <div className="shrink-0 flex flex-col gap-2 px-5 py-3 bg-neutral-700 border border-neutral-600 rounded-[1rem] ">
        <p
          className={`uppercase text-neutral-50/70 text-[0.875rem] tracking-3  `}
        >
          % change
        </p>
        <div
          className={`flex items-center gap-2 text-[1.25rem] tracking-1 ${
            percentageChange >= 0 ? "text-profit" : "text-loss"
          }`}
        >
          <Triangle
            size={13}
            strokeWidth={0}
            fill={percentageChange >= 0 ? "#42eb05" : "#ff4141"}
            className={`${percentageChange < 0 ? "rotate-180" : ""}`}
          />
          <p>
            {percentageChange >= 0
              ? `+${percentageChange}%`
              : `${percentageChange}%`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
