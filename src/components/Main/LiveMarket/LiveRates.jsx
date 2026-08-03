import React from "react";
import { useDataStore } from "../../../stores/DataStore";
import { useEffect } from "react";
import { Triangle } from "lucide-react";
import LiveRateContainer from "./LiveRateContainer";
import { useLoadingStore } from "../../../stores/LoadingStore";
import { getLiveMarketData } from "../../../Services/LiveMarketDataService";
import { use } from "react";

const LiveRates = () => {
  const { liveMarketData } = useDataStore();

  const { loadingLiveMarket, setLoadingLiveMarket } = useLoadingStore();

  return (
    <div className="flex overflow-hidden ">
      <div className="flex shrink-0 enable-marquee">
        <div className="flex shrink-0  ">
          {liveMarketData?.slice(0, 5).map((data, index) => (
            <LiveRateContainer
              key={index}
              yesterdayRate={data.rate.toFixed(2)}
              currRate={liveMarketData[index + 5].rate.toFixed(2)}
              pair={`${data.base}/${data.quote}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 ">
          {liveMarketData?.slice(0, 5).map((data, index) => (
            <LiveRateContainer
              key={index}
              yesterdayRate={data.rate.toFixed(2)}
              currRate={liveMarketData[index + 5].rate.toFixed(2)}
              pair={`${data.base}/${data.quote}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 ">
          {liveMarketData?.slice(0, 5).map((data, index) => (
            <LiveRateContainer
              key={index}
              yesterdayRate={data.rate.toFixed(2)}
              currRate={liveMarketData[index + 5]?.rate.toFixed(2)}
              pair={`${data.base}/${data.quote}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveRates;
