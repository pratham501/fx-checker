import React from "react";
import RateContainer from "./RateContainer";
import { ArrowDownUp } from "lucide-react";
import { StarIcon } from "lucide-react";
import { useValueStore } from "@/stores/ValueStore";
import {
  addToFavourites,
  checkFavState,
  toggleFavouritePair,
} from "@/utils/Favourites";
import { useState } from "react";
import { useEffect } from "react";
import { useFavouriteStore } from "@/stores/FavouriteStore";

const CheckRate = () => {
  const [favState, setFavState] = useState(false);

  const {
    sendCurrency,
    receiveCurrency,
    setSendCurrency,
    setReceiveCurrency,
    currRate,
  } = useValueStore();

  const { favData } = useFavouriteStore();

  const handleSwap = () => {
    const temp = sendCurrency;
    setSendCurrency(receiveCurrency);
    setReceiveCurrency(temp);
  };

  const handleFavourite = (e) => {
    toggleFavouritePair(`${sendCurrency}/${receiveCurrency}`);
  };

  useEffect(() => {
    const favState = checkFavState(`${sendCurrency}/${receiveCurrency}`);
    setFavState(favState);
  }, [sendCurrency, receiveCurrency, favData]);

  return (
    <div>
      <h1 className="uppercase mb-4 text-neutral-50 ">check the rate</h1>
      <div className=" flex flex-col sm:flex-row justify-between gap-4 bg-neutral-700 p-4 rounded-[20px] rounded-b-none ">
        <RateContainer type={"send"} />
        {/* SWAP BUTTON */}
        <div className="flex justify-center sm:items-center ">
          <div
            onClick={handleSwap}
            className="border border-neutral-500 bg-neutral-600 p-4 w-fit rounded-2xl"
          >
            <ArrowDownUp className="text-neutral-50 sm:rotate-90" />
          </div>
        </div>
        <RateContainer type={"receive"} />
      </div>
      <div className="border-t-3 border-dashed border-neutral-500 p-4 gap-4 rouded-b-[16px] flex flex-col sm:flex-row justify-between items-center bg-neutral-700 rounded-b-[20px] ">
        <p className="text-neutral-50 text-[0.75rem] w-fit ">
          1 {sendCurrency} = {currRate} {receiveCurrency}
        </p>
        <div
          onClick={handleFavourite}
          className={`border ${
            favState == true
              ? "bg-comp text-neutral-900 border-comp"
              : "bg-neutral-600 border-neutral-300 text-neutral-200"
          }   flex gap-2 w-fit px-3 py-2 rounded-[0.5rem] text-[0.75rem] items-center uppercase hover:opacity-80 cursor-pointer`}
        >
          <StarIcon
            size={13}
            color={favState == true ? "#171717" : "#d4d4d4"}
            fill={favState == true ? "#171717" : "#525252"}
          />
          <p> {favState == true ? "Favourited" : "Favourite"}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckRate;
