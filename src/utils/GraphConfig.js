import { useDataStore } from "@/stores/DataStore";
import { getGraphTimeLabels } from "./DateAndTime";
import { handleGraphData } from "@/Services/GraphDataService";
import { elements, Tooltip } from "chart.js";
import { useHistoryStore } from "@/stores/HistoryStore";
import { useValueStore } from "@/stores/ValueStore";

export function getGraphOptions() {
  const options = {
    animation: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        position: "bottom",
        titleFont: {
          size: 11,
        },
        bodyFont: {
          size: 10.5,
        },
        caretSize: useHistoryStore.getState().fixedToolTip ? 0 : 5,
        displayColors: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 3,
        },
        grid: {
          display: true,
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 5,
        },
        grid: {
          display: false,
        },
        offset: true,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    events: ["mousemove", "mouseout", "touchstart", "touchmove"],
    elements: {
      point: {
        radius: 0,
        backgroundColor: "#cef739",
        hoverRadius: 5,
      },
      line: {
        borderWidth: 2.3,
      },
    },
  };

  return options;
}

Tooltip.positioners.bottom = function (elements, eventPosition) {
  if (eventPosition == false) {
    return false;
  }
  const chart = this.chart;

  if (useHistoryStore.getState().fixedToolTip) {
    return {
      x: chart.chartArea.right,
      y: chart.chartArea.top,
    };
  }

  return {
    x: eventPosition.x,
    y: chart.chartArea.bottom,
    xAlign: "center",
    yAlign: "bottom",
  };
};

async function getGraphData() {
  let rates = [];
  await handleGraphData();

  switch (useHistoryStore.getState().timelineValue) {
    case "1m":
      useDataStore.getState().oneMonthData?.map((obj) => {
        rates.push(obj.rate);
      });
      break;

    case "3m":
      useDataStore.getState().threeMonthData?.map((obj) => {
        rates.push(obj.rate);
      });
      break;

    case "1y":
      useDataStore.getState().oneYearData?.map((obj) => {
        rates.push(obj.rate);
      });
      break;
  }

  return rates;
}

export async function getGraphDetails() {
  const labels = getGraphTimeLabels();

  const data = await getGraphData();

  console.log("labels- ", labels);
  console.log("data- ", data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        data: data,
        fill: false,
        borderColor: "#cef739",
        tension: 0,
      },
    ],
  };

  return chartData;
}
