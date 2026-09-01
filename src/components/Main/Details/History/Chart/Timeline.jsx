import React from "react";
import { useHistoryStore } from "../../../../../stores/HistoryStore";

const Timeline = () => {
  const timelineVariables = ["1m", "3m", "1y"];

  const { timelineValue, setTimelineValue } = useHistoryStore();
  return (
    <div className="flex gap-1 bg-neutral-700 w-fit rounded-[0.5rem] p-0.5">
      {timelineVariables.map((val, index) => (
        <div
          className={`uppercase px-4 py-3 cursor-pointer text-[0.75rem] tracking-2 rounded-[0.5rem] ${
            timelineValue == val
              ? "bg-neutral-500 text-neutral-50"
              : "text-neutral-200"
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
