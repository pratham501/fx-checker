import { httpClient } from "@/config/AxiosHelper";
import { currenciesForCompare, useCompareStore } from "@/stores/CompareStore";
import { useLoadingStore } from "@/stores/LoadingStore";
import { useValueStore } from "@/stores/ValueStore";

export const getCompareData = async () => {
  try {
    const res = await httpClient.get(
      `?base=${
        useValueStore.getState().sendCurrency
      }&quotes=${currenciesForCompare.map((curr) => curr)},`
    );
    useCompareStore.setState({ compareData: res.data });
    return res.data;
  } catch (e) {
    console.error("Error in getting compare data");
    useLoadingStore.setState({ error: e });
  }
};
