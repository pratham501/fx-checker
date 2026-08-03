import { DotIcon } from "lucide-react";
import { CloudUpload } from "lucide-react";
import { Triangle } from "lucide-react";
import React from "react";
import { calculatePercentage } from "../../../utils/LiveRates";
import { useLoadingStore } from "@/stores/LoadingStore";

const LiveRateContainer = ({ yesterdayRate, currRate, pair }) => {
  const percentageChange = calculatePercentage(currRate, yesterdayRate);

  const { loadingStart } = useLoadingStore();

  return (
    <div className=" py-[12px] px-[12px] sm:px-[20px] bg-neutral-700 border border-r-neutral-500 border-l-neutral-500 border-y-0 ">
      <div className="flex shrink-0 gap-3 ">
        <p className="text-neutral-400 flex-none">{pair}</p>
        <p className="text-neutral-50">{currRate}</p>
        <div className="flex items-center gap-1 ">
          <span>
            {percentageChange > 0 ? (
              <Triangle
                size={8}
                strokeWidth={3}
                className="text-green-500"
                fill="#22c55e"
              />
            ) : percentageChange < 0 ? (
              <Triangle
                size={8}
                strokeWidth={3}
                className="text-red-500 "
                fill="#ef4444"
              />
            ) : (
              ""
            )}
          </span>
          <p
            className={`${
              percentageChange > 0
                ? "text-green-500"
                : percentageChange < 0
                ? "text-red-500"
                : "text-neutral-50"
            }`}
          >
            {percentageChange > 0
              ? `+${percentageChange}`
              : `${percentageChange}`}
            %
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveRateContainer;
