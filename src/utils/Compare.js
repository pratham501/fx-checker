import { getCompareData } from "@/Services/CompareDataService";
import { useValueStore } from "@/stores/ValueStore";
import { getSelectOptions } from "./SelectOptions";
import { useCompareStore } from "@/stores/CompareStore";

export const getCompareValues = async () => {
  const { sendCurrency } = useValueStore.getState();

  const compare = localStorage.getItem("Compare");
  let compareObj;
  if (compare) {
    compareObj = JSON.parse(compare);

    if (compareObj && compareObj.sendCurrency) {
      return compareList[sendCurrency];
    }
  }

  const data = await getCompareData();

  const curreciesOptions = await getSelectOptions();

  //To add label to data
  curreciesOptions?.map((optObj) => {
    data?.map((compObj) => {
      if (optObj.value == compObj.quote) {
        compObj["label"] = optObj.label;
      }
    });
  });

  if (compareObj) {
    compareObj[sendCurrency] = data;
    localStorage.setItem("Compare", JSON.stringify(compareObj));
  } else {
    let obj = {};
    obj[sendCurrency] = data;
    localStorage.setItem("Compare", JSON.stringify(obj));
  }

  useCompareStore.setState({ compareValues: data });
};
