import React from "react";

import Stats from "./Stats";
import Chart from "./Chart/Chart";
import { useValueStore } from "@/stores/ValueStore";
import GraphNone from "./Chart/GraphNone";

const History = () => {
  const { sendCurrency, receiveCurrency } = useValueStore();

  if (sendCurrency == receiveCurrency) {
    return <GraphNone />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Stats />
      <Chart />
    </div>
  );
};

export default History;
