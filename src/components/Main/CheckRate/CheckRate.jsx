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
      <h1 className="uppercase mb-4 text-neutral-50 text-[1.25rem] tracking-1 ">
        check the rate
      </h1>
      <div className=" flex flex-col sm:flex-row justify-between gap-4 bg-neutral-700 p-4 rounded-[1.25rem] rounded-b-none ">
        <RateContainer type={"send"} />
        {/* SWAP BUTTON */}
        <div className="flex justify-center sm:items-center  ">
          <div
            onClick={handleSwap}
            className="border border-neutral-500 bg-neutral-600 w-12 h-12 flex justify-center items-center rounded-[0.5rem] cursor-pointer hover:bg-neutral-500 hover:border-neutral-400 "
          >
            <ArrowDownUp
              strokeWidth={1.5}
              className="text-neutral-50 sm:rotate-90"
            />
          </div>
        </div>
        <RateContainer type={"receive"} />
      </div>
      <div className="border-t border-dashed border-neutral-500 p-4 gap-4 rouded-b-[16px] flex flex-col sm:flex-row justify-between items-center bg-neutral-700 rounded-b-[20px] ">
        <p className="text-neutral-50 text-[0.75rem] w-fit tracking-2 ">
          1 {sendCurrency} = {currRate} {receiveCurrency}
        </p>
        <div
          onClick={handleFavourite}
          className={`border ${
            favState == true
              ? "bg-comp text-neutral-900 border-comp hover:opacity-80"
              : "bg-neutral-600 border-neutral-300 text-neutral-200 hover:bg-neutral-500 hover-border hover:border-neutral-400"
          }   flex gap-2 w-fit px-3 py-2 rounded-[0.5rem] text-[0.75rem] tracking-2 font-medium items-center uppercase  cursor-pointer`}
        >
          <StarIcon
            size={13}
            strokeWidth={1}
            color={favState == true ? "#0a0a0a" : "#9d9d9d"}
            fill={favState == true ? "#0a0a0a" : "#ffffff00"}
          />
          <p> {favState == true ? "Favourited" : "Favourite"}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckRate;
