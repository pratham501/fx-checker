import { getCompareData } from "@/Services/CompareDataService";
import { useValueStore } from "@/stores/ValueStore";
import { getSelectOptions } from "./SelectOptions";
import { useCompareStore } from "@/stores/CompareStore";
import { getTodayDate } from "./DateAndTime";

export const getCompareValues = async () => {
  const { sendCurrency } = useValueStore.getState();

  const compare = localStorage.getItem("Compare");
  let compareObj;
  if (compare) {
    compareObj = JSON.parse(compare);

    if (compareObj && compareObj.sendCurrency) {
      if (compareObj.sendCurrency.date == getTodayDate()) {
        return compareObj[sendCurrency].data;
      }
    }
  }

  const data = await getCompareData();

  const currenciesOptions = await getSelectOptions();

  //To add label to data
  data?.map((compObj) => {
    currenciesOptions?.map((optObj) => {
      if (optObj.value == compObj.quote) {
        compObj["label"] = optObj.label;
      }
    });
  });

  if (compareObj) {
    const send = { data: data, date: getTodayDate() };
    compareObj[sendCurrency] = send;
    localStorage.setItem("Compare", JSON.stringify(compareObj));
  } else {
    let obj = {};
    const send = { data: data, date: getTodayDate() };
    obj[sendCurrency] = send;
    localStorage.setItem("Compare", JSON.stringify(obj));
  }

  useCompareStore.setState({ compareValues: data });
};
