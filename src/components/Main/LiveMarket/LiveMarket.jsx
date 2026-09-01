import React from "react";
import LiveRates from "./LiveRates";

const LiveMarket = () => {
  return (
    <div className="flex text-[10px] sm:text-[12px] items-center">
      <div className="shrink-0 uppercase bg-comp text-shadow-neutral-900 px-2 sm:px-4  py-3 z-1 ">
        <p>live markets</p>
      </div>
      <LiveRates />
    </div>
  );
};

export default LiveMarket;
