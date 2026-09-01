import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { getLiveMarketData } from "./Services/LiveMarketDataService";
import { useLoadingStore } from "./stores/LoadingStore";
import { useDataStore } from "./stores/DataStore";
import Main from "./components/Main/Main";
import ErrorPage from "./components/Main/ErrorPage";
import { getRate } from "./Services/RateService";
import { handleGraphData } from "./Services/GraphDataService";
import { useHistoryStore } from "./stores/HistoryStore";
import { useValueStore } from "./stores/ValueStore";
import { getCompareData } from "./Services/CompareDataService";
import { getCompareValues } from "./utils/Compare";
import { setFavouriteData } from "./utils/Favourites";
import Loading from "./components/Loading";
import { getSelectOptions } from "./utils/SelectOptions";

function App() {
  const {
    loading,
    loadingDynamic,
    loadingPermanent,
    setLoadingPermanent,
    error,
    setLoadingDynamic,
    setLoading,
  } = useLoadingStore();

  const { sendCurrency, receiveCurrency } = useValueStore();

  const { timelineValue } = useHistoryStore();

  useEffect(() => {
    async function getPermanentData() {
      await getLiveMarketData();
      await getSelectOptions();
      setFavouriteData();
      setLoadingPermanent(false);
    }

    getPermanentData();
  }, []);

  useEffect(() => {
    async function getDynamicData() {
      await getRate();
      await getCompareValues();
      setLoadingDynamic(false);
    }

    getDynamicData();
  }, [sendCurrency, receiveCurrency]);

  useEffect(() => {
    async function handleGraph() {
      await handleGraphData();
      setLoading(false);
    }

    handleGraph();
  }, [sendCurrency, receiveCurrency, timelineValue]);

  if (error) {
    return <ErrorPage />;
  }

  if (loading || loadingDynamic || loadingPermanent) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-900 flex flex-col w-full min-h-260 md:min-h-screen lg:min-h-260 2xl:min-h-screen cursor-default">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
