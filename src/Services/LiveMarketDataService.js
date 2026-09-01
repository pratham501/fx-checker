import { getItemData, setItemData } from "@/utils/StoringData";
import { httpClient } from "../config/AxiosHelper";
import { useDataStore } from "../stores/DataStore";
import { getYesterdayDate } from "../utils/DateAndTime";

const yesterdayDate = getYesterdayDate();

export const getLiveMarketData = async () => {
  const savedData = getItemData("liveMarketData");

  if (savedData) {
    useDataStore.setState({ liveMarketData: savedData });
    return;
  }

  try {
    const res = await httpClient.get(
      `?from=${yesterdayDate}&quotes=INR,USD,JPY,GBP,CNY`
    );

    setItemData("liveMarketData", res.data);

    useDataStore.setState({ liveMarketData: res.data });
  } catch (e) {
    console.error("Error in getting live market data : ", e.msg);
    throw e;
  }
};
