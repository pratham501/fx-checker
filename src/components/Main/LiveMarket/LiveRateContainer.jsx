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
    <div className=" py-3 px-3 sm:px-4 bg-neutral-700 border border-r-neutral-500 border-l-neutral-500 border-y-0 ">
      <div className="flex shrink-0 gap-2.5 ">
        <p className="text-neutral-200 flex-none">{pair}</p>
        <p className="text-neutral-50">{currRate}</p>
        <div className="flex items-center gap-1 ">
          <span>
            {percentageChange > 0 ? (
              <Triangle size={11} strokeWidth={0} className="" fill="#42eb05" />
            ) : percentageChange < 0 ? (
              <Triangle
                size={11}
                strokeWidth={0}
                className=" rotate-180"
                fill="#ff4141"
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
