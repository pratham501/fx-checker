import React from "react";
import History from "./History/History";
import Compare from "./Compare/Compare";
import { useDetailsStore } from "../../../stores/DetailsStore";
import DetailsHeader from "./DetailsHeader";
import Favourites from "./Favourites/Favourites";

const Details = () => {
  const { detailsPage } = useDetailsStore();

  return (
    <div className="flex flex-col transition-all ease-in-out duration-1000">
      <DetailsHeader />
      {detailsPage == "compare" ? (
        <Compare />
      ) : detailsPage == "favourites" ? (
        <Favourites />
      ) : (
        <History />
      )}
    </div>
  );
};

export default Details;
