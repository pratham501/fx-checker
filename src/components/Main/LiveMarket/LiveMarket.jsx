import React from "react";
import LiveRates from "./LiveRates";

const LiveMarket = () => {
  return (
    <div className="flex text-[10px] sm:text-[12px] items-center">
      <div className="shrink-0 uppercase bg-comp text-shadow-neutral-900 px-[8px] sm:px-[16px]  py-[12px] z-1 ">
        <p>live markets</p>
      </div>
      <LiveRates />
    </div>
  );
};

export default LiveMarket;
