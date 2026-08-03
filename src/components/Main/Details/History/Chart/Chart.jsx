import React from "react";
import Timeline from "./Timeline";
import GraphContainer from "./GraphContainer";

const Chart = () => {
  return (
    <div className="flex flex-col gap-4">
      <Timeline />
      <GraphContainer />
    </div>
  );
};

export default Chart;
