import React from "react";
import { useHistoryStore } from "../../../../../stores/HistoryStore";

const Timeline = () => {
  const timelineVariables = ["1m", "3m", "1y"];

  const { timelineValue, setTimelineValue } = useHistoryStore();
  return (
    <div className="flex gap-1 bg-neutral-500 w-fit rounded-[0.5rem] p-0.5">
      {timelineVariables.map((val, index) => (
        <div
          className={`uppercase text-n px-4 py-3 cursor-pointer rounded-[0.5rem] ${
            timelineValue == val ? "bg-neutral-400" : "bg-neutral-500"
          } `}
          key={index}
          onClick={() => {
            setTimelineValue(val);
          }}
        >
          {val}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
