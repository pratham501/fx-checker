import { httpClient } from "@/config/AxiosHelper";
import { useLoadingStore } from "@/stores/LoadingStore";
import { useValueStore } from "@/stores/ValueStore";
import { getItemData, setItemData } from "@/utils/StoringData";

export async function getRate() {
  const pair = `${useValueStore.getState().sendCurrency}/${
    useValueStore.getState().receiveCurrency
  }`;

  const currencyObj = getItemData(pair);

  if (currencyObj?.rate) {
    useValueStore.setState({ currRate: currencyObj.rate });
  }

  try {
    const res = await httpClient.get(
      `?base=${useValueStore.getState().sendCurrency}&quotes=${
        useValueStore.getState().receiveCurrency
      }`
    );

    if (currencyObj) {
      currencyObj["rate"] = res.data[0].rate;
      setItemData(pair, currencyObj);
    } else {
      let obj = {};
      obj["rate"] = res.data[0].rate;
      setItemData(pair, obj);
    }

    useValueStore.setState({ currRate: res.data[0].rate });
  } catch (e) {
    console.error("Error in gettign rate");
    useLoadingStore.setState({ error: e });
    throw e;
  }
}
