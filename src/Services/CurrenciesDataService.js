import { useLoadingStore } from "@/stores/LoadingStore";
import axios from "axios";

const url = import.meta.env.VITE_CURRENCIES_API_URL;

export async function getCurrenciesData() {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (e) {
    console.error("Error in getting currencies data ", e);
    throw e;
  } finally {
    useLoadingStore.setState({ loading: false });
  }
}
