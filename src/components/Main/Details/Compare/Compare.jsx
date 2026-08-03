import React from "react";
import CompareCurrency from "./CompareCurrency";
import { useValueStore } from "@/stores/ValueStore";
import { currenciesForCompare, useCompareStore } from "@/stores/CompareStore";
import { useState } from "react";
import { useCallback } from "react";
import { useDebounce } from "use-debounce";

const Compare = () => {
  const { inputValue, sendCurrency } = useValueStore();
  const { compareValues } = useCompareStore();
  const [debouncedInputValue] = useDebounce(
    inputValue == "" ? "0" : inputValue,
    1000
  );

  return (
    <div className="flex flex-col gap-4 p-4 bg-neutral-700 ">
      <div className="flex flex-col md:flex-row justify-between ">
        <h1 className="uppercase text-[0.875rem] w-fit ">
          multi currency{" "}
          <span>
            {debouncedInputValue} from {sendCurrency}
          </span>
        </h1>
        <p className="uppercase w-fit">10 pairs</p>
      </div>
      <div className="flex flex-col gap-3 ">
        {compareValues?.map((obj, idx) => (
          <CompareCurrency
            key={idx}
            currency={obj.quote}
            rate={obj.rate}
            label={obj.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Compare;
