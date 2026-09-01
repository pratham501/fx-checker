import React from "react";
import CompareCurrency from "./CompareCurrency";
import { useValueStore } from "@/stores/ValueStore";
import { currenciesForCompare, useCompareStore } from "@/stores/CompareStore";
import { useState } from "react";
import { useCallback } from "react";
import { useDebounce } from "use-debounce";
import CompareEmpty from "./CompareEmpty";
import { useEffect } from "react";

const Compare = () => {
  const { inputValue, sendCurrency } = useValueStore();
  const { compareValues } = useCompareStore();
  const [debouncedInputValue] = useDebounce(
    inputValue == "" ? "0" : inputValue,
    1000
  );

  if (inputValue == "") {
    return <CompareEmpty />;
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-neutral-700 border-neutral-600 rounded-[1rem] ">
      <div className="flex flex-col md:flex-row justify-between md:items-center ">
        <h1 className="uppercase text-[0.875rem] w-fit tracking-3 text-neutral-200 ">
          multi-currency{" "}
          <span className="text-[1rem] text-neutral-50 font-medium">
            {debouncedInputValue} from {sendCurrency}
          </span>
        </h1>
        <p className="uppercase w-fit text-[0.75rem] text-neutral-50/70 tracking-2 ">
          10 pairs
        </p>
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
