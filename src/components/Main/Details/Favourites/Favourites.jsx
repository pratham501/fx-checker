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

  if (!favData || favData.length == 0) {
    return <FavouriteEmpty />;
  }

  return (
    <div className="flex flex-col gap-5 bg-neutral-700 p-5 border border-neutral-600 rounded-[1rem]">
      <div className="flex items-center justify-between">
        <p className="uppercase text-neutral-50 text-[1rem] tracking-3 font-medium">
          pinned pairs
        </p>
        <p className="uppercase text-neutral-50/70 text-[0.75rem] tracking-2">
          {favData?.length} favourites
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {favData?.map((obj, idx) => (
          <FavouritesCard key={idx} dataObj={obj} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
