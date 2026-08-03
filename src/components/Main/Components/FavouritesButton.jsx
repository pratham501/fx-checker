import { useFavouriteStore } from "@/stores/FavouriteStore";
import { checkFavState, toggleFavouritePair } from "@/utils/Favourites";
import { StarIcon } from "lucide-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FavouritesButton = ({ pair }) => {
  const [favState, setFavState] = useState(false);
  const { favData } = useFavouriteStore();

  function handleFavClick() {
    toggleFavouritePair(pair);
  }

  useEffect(() => {
    const favState = checkFavState(pair);
    setFavState(favState);
  }, [favData]);

  return (
    <div
      onClick={handleFavClick}
      className={` ${
        favState == true ? " border-comp" : "border-neutral-500"
      } hover:bg-neutral-500 p-2 border h-8  rounded-[0.5rem] flex items-center aspect-square cursor-pointer`}
    >
      <StarIcon
        fill={favState == true ? "#cef739" : "#525252"}
        color={favState == true ? "#cef739" : "#fafafa"}
        className="size-3.5"
      />
    </div>
  );
};

export default FavouritesButton;
