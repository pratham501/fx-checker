import React from "react";
import FavouritesButton from "../../Components/FavouritesButton";
import { useValueStore } from "@/stores/ValueStore";
import { useDebounce } from "use-debounce";

const CompareCurrency = ({ currency, rate, label }) => {
  const { inputValue, sendCurrency } = useValueStore();
  const input = parseFloat(inputValue);
  const [debouncedFinalValue] = useDebounce(
    inputValue == "" ? "0" : (rate * input).toFixed(2),
    1000
  );

  if (sendCurrency == currency) {
    return;
  }

  return (
    <div className="bg-neutral-600 border border-neutral-500 p-3 flex gap-2.5 ">
      {/* Details */}
      <div className="w-full">
        <div className="flex justify-between">
          <p className="text-[0.875rem text-neutral-50">{currency}</p>
          <p className="text-[1rem] text-neutral-50 ">{debouncedFinalValue}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[0.75rem] text-neutral-200">{label}</p>
          <p className=" text-[0.625rem] text-neutral-200">{rate}</p>
        </div>
      </div>
      {/* Favourites Button */}
      <FavouritesButton pair={`${sendCurrency}/${currency}`} />
    </div>
  );
};

export default CompareCurrency;
