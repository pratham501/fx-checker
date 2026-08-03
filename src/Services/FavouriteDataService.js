import { httpClient } from "@/config/AxiosHelper";
import { useLoadingStore } from "@/stores/LoadingStore";
import { getYesterdayDate } from "@/utils/DateAndTime";

export async function getFavData(send, receive) {
  const yesterdayDate = getYesterdayDate();

  try {
    const res = await httpClient.get(
      `?base=${send}&from=${yesterdayDate}&quotes=${receive}`
    );
    console.log("fav data- ", res.data);
    return res.data;
  } catch (e) {
    console.error("error in getting favourite data- ", e);
    useLoadingStore.setState({ error: e });
  }
}
