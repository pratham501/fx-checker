import { getGraphDetails, getGraphOptions } from "@/utils/GraphConfig";
import { useEffect } from "react";
import { useState } from "react";
import { Chart, Line } from "react-chartjs-2";
import "chart.js/auto";
import { useDataStore } from "@/stores/DataStore";
import { useHistoryStore } from "@/stores/HistoryStore";
import { useValueStore } from "@/stores/ValueStore";

const Graph = () => {
  const [graphData, setGraphData] = useState({ datasets: [] });

  const { timelineValue } = useHistoryStore();
  const { sendCurrency, receiveCurrency } = useValueStore();

  useEffect(() => {
    async function handleGraphDetails() {
      const data = await getGraphDetails();
      setGraphData(data);
    }

    handleGraphDetails();
  }, [timelineValue, sendCurrency, receiveCurrency]);

  const options = getGraphOptions();

  return (
    <div className="w-full h-74">
      <Line className="" data={graphData} options={options} />
    </div>
  );
};

export default Graph;
