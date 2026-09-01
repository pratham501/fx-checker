import { httpClient } from "../config/AxiosHelper";
import { useValueStore } from "../stores/ValueStore";
import {
  getOneMonthDate,
  getOneYearDate,
  getThreeMonthDate,
} from "../utils/DateAndTime";
import { useDataStore } from "../stores/DataStore";
import { useHistoryStore } from "@/stores/HistoryStore";
import { useLoadingStore } from "@/stores/LoadingStore";
import { calculatePercentage } from "@/utils/LiveRates";
import { getItemData, setItemData } from "@/utils/StoringData";

const oneMonthDate = getOneMonthDate();
const threeMonthDate = getThreeMonthDate();
const oneYearDate = getOneYearDate();

export const handleGraphData = async () => {
  if (
    useValueStore.getState().sendCurrency ==
    useValueStore.getState().receiveCurrency
  )
    return;

  try {
    let data;
    switch (useHistoryStore.getState().timelineValue) {
      case "1m":
        data = await getOneMonthData();
        useDataStore.setState({ oneMonthData: data });
        break;
      case "3m":
        data = await getThreeMonthData();
        useDataStore.setState({ threeMonthData: data });
        break;
      case "1y":
        data = await getOneYearData();
        useDataStore.setState({ oneYearData: data });
        break;
    }

    const l = data.length;
    const currRate = data[l - 1]?.rate;
    const lastRate = data[0]?.rate;
    useHistoryStore.setState({
      change: currRate - lastRate,
    });
    useHistoryStore.setState({
      percentageChange: calculatePercentage(currRate, lastRate),
    });
  } catch (e) {
    useLoadingStore.setState({ error: e });
  }
};

const getOneMonthData = async () => {
  const savedData = getItemData(
    `${useValueStore.getState().sendCurrency}/${
      useValueStore.getState().receiveCurrency
    }`
  );

  if (savedData?.oneMonth) {
    return savedData.oneMonth;
  }

  try {
    const res = await httpClient.get(
      `?base=${
        useValueStore.getState().sendCurrency
      }&from=${oneMonthDate}&quotes=${useValueStore.getState().receiveCurrency}`
    );


    if (savedData) {
      savedData["oneMonth"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        savedData
      );
    } else {
      const pairData = {};
      pairData["oneMonth"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        pairData
      );
    }

    return res.data;
  } catch (e) {
    console.error("Error in getting one month data", error);
    throw e;
  }
};

const getThreeMonthData = async () => {
  const savedData = getItemData(
    `${useValueStore.getState().sendCurrency}/${
      useValueStore.getState().receiveCurrency
    }`
  );

  if (savedData?.threeMonth) {
    return savedData.threeMonth;
  }

  try {
    const res = await httpClient.get(
      `?base=${
        useValueStore.getState().sendCurrency
      }&from=${threeMonthDate}&quotes=${
        useValueStore.getState().receiveCurrency
      }`
    );

    if (savedData) {
      savedData["threeMonth"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        savedData
      );
    } else {
      const pairData = {};
      pairData["threeMonth"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        pairData
      );
    }

    return res.data;
  } catch (e) {
    console.error("Error in getting three month data", error);
    throw e;
  }
};

const getOneYearData = async () => {
  const savedData = getItemData(
    `${useValueStore.getState().sendCurrency}/${
      useValueStore.getState().receiveCurrency
    }`
  );
  if (savedData?.oneYear) {
    return savedData.oneYear;
  }

  try {
    const res = await httpClient.get(
      `?base=${
        useValueStore.getState().sendCurrency
      }&from=${oneYearDate}&quotes=${useValueStore.getState().receiveCurrency}`
    );

    if (savedData) {
      savedData["oneYear"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        savedData
      );
    } else {
      const pairData = {};
      pairData["oneYear"] = res.data;
      setItemData(
        `${useValueStore.getState().sendCurrency}/${
          useValueStore.getState().receiveCurrency
        }`,
        pairData
      );
    }

    return res.data;
  } catch (e) {
    console.error("Error in getting one Year data", error);
    throw e;
  }
};
