import { DotIcon } from "lucide-react";
import React from "react";
import { useValueStore } from "../../../../../stores/ValueStore";
import { useEffect } from "react";
import { Chart } from "react-chartjs-2";
import { scales } from "chart.js";
import {
  getGraphDetails,
  getGraphOptions,
} from "../../../../../utils/GraphConfig";
import { handleGraphData } from "../../../../../Services/GraphDataService";
import { useHistoryStore } from "../../../../../stores/HistoryStore";
import { getGraphTimeLabels } from "@/utils/DateAndTime";
import { useState } from "react";
import Graph from "./Graph";

const GraphContainer = () => {
  const { sendCurrency, receiveCurrency } = useValueStore();
  const { timelineValue, hoverPriceValue, fixedToolTip, toggleFixedToolTip } =
    useHistoryStore();

  // useEffect(() => {
  //   console.log("data for chart- ", graphData);
  // });

  return (
    <div className=" bg-neutral-700 p-5 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <p className="text-neutral-50 text-[1rem]">
          {sendCurrency}/{receiveCurrency}
        </p>
        <div className="text-neutral-200 text-[0.75rem] flex items-center ">
          <p>0.8530</p>
          <DotIcon />
          <p>MAY 14 16:00 IST</p>
        </div>
      </div>
      {/* Fixed Tool tip feature, made but tooltip placement is not looking good */}
      {/* <div className="flex gap-2 text-[0.65rem] text-neutral-50 self-end ">
        <input
          className="w-2.5"
          type="checkbox"
          checked={fixedToolTip}
          onChange={toggleFixedToolTip}
          name=""
          id="tooltipIsFixed"
        />
        <label htmlFor="tooltipIsFixed">Fixed tooltip</label>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full  ">
        <Graph />
      </div>
    </div>
  );
};

export default GraphContainer;
