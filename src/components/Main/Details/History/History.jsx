import React from "react";

import Stats from "./Stats";
import Chart from "./Chart/Chart";
import { useValueStore } from "@/stores/ValueStore";
import GraphNone from "./Chart/GraphNone";
import Timeline from "./Chart/Timeline";

const History = () => {
  const { sendCurrency, receiveCurrency } = useValueStore();

  if (sendCurrency == receiveCurrency) {
    return <GraphNone />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-start">
        <Stats />
        <Timeline />
      </div>
      <Chart />
    </div>
  );
};

export default History;
