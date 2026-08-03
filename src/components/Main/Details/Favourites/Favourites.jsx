import React from "react";
import FavouritesCard from "./FavouriteesCard";
import { useEffect } from "react";
import { useState } from "react";
import { useFavouriteStore } from "@/stores/FavouriteStore";
// import { createFavCardData, getFavouritesData } from "@/utils/Favourites";
import FavouriteEmpty from "./FavouriteEmpty";

const Favourites = () => {
  const { favData } = useFavouriteStore();

  // useEffect(() => {
  //   getFavouritesData();
  // }, []);

  useEffect(() => {
    console.log("favdata list-", favData);
  }, []);

  if (!favData || favData.length == 0) {
    return <FavouriteEmpty />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="uppercase text-neutral-50 text-[1rem]">pinned pairs</p>
        <p className="uppercase text-neutral-200 text-[0.75rem] ">
          {favData?.length} favourites
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {favData?.map((obj) => (
          <FavouritesCard dataObj={obj} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
