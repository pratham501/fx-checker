import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import { getLiveMarketData } from "./Services/LiveMarketDataService";
import { useLoadingStore } from "./stores/LoadingStore";
import Loading from "./components/Loading";
import { useDataStore } from "./stores/DataStore";
import Main from "./components/Main/Main";
import { Suspense } from "react";
import ErrorPage from "./components/Main/ErrorPage";
import { getRate } from "./Services/RateService";
import { handleGraphData } from "./Services/GraphDataService";
import { useHistoryStore } from "./stores/HistoryStore";
import { useValueStore } from "./stores/ValueStore";
import { getCompareData } from "./Services/CompareDataService";
import { getCompareValues } from "./utils/Compare";
import { setFavouriteData } from "./utils/Favourites";

function App() {
  const { loading, loadingStart, error, setLoadingStart, setLoading } =
    useLoadingStore();

  const { sendCurrency, receiveCurrency } = useValueStore();

  const { timelineValue } = useHistoryStore();

  useEffect(() => {
    async function getFirstData() {
      await getLiveMarketData();
      await getRate();
      await getCompareValues();
      setFavouriteData();
      setLoadingStart(false);
    }

    getFirstData();
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

  if (loading || loadingStart) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-900 flex flex-col w-full min-h-260 md:min-h-screen lg:min-h-260 2xl:min-h-screen">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
