import { useValueStore } from "@/stores/ValueStore";
import { getCurrenciesData } from "../Services/CurrenciesDataService";
import { useLoadingStore } from "../stores/LoadingStore";

export async function getSelectOptions() {
  try {
    const currenciesData = await getCurrenciesData();

    const selectOptions = [];

    currenciesData.map((obj) =>
      selectOptions.push({ value: obj.iso_code, label: obj.name })
    );
    useValueStore.setState({ selectOptions: selectOptions });
    return selectOptions;
  } catch (e) {
    useLoadingStore.setState({ error: e });
  }
}
