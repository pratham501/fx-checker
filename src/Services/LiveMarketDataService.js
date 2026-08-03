import { httpClient } from "../config/AxiosHelper";
import { useDataStore } from "../stores/DataStore";
import { getYesterdayDate } from "../utils/DateAndTime";

const yesterdayDate = getYesterdayDate();

export const getLiveMarketData = async () => {
  const saved = localStorage.getItem("liveMarketData");
  let savedData;
  if (saved) {
    savedData = JSON.parse(saved);

    if (savedData && Object.keys(savedData).length != 0) {
      useDataStore.setState({ liveMarketData: savedData });
      return;
    }
  }

  try {
    const res = await httpClient.get(
      `?from=${yesterdayDate}&quotes=INR,USD,JPY,GBP,CNY`
    );

    console.log("got live market data");

    localStorage.setItem("liveMarketData", JSON.stringify(res.data));

    useDataStore.setState({ liveMarketData: res.data });
  } catch (e) {
    console.error("Error in getting live market data : ", e.msg);
    throw e;
  }
};
