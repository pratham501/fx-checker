import React from "react";
import { useValueStore } from "../../../stores/ValueStore";
import { useEffect } from "react";
import { useState } from "react";
import { getSelectOptions } from "../../../utils/SelectOptions";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCurrency = ({ type }) => {
  const {
    sendCurrency,
    receiveCurrency,
    setSendCurrency,
    setReceiveCurrency,
    selectOptions,
  } = useValueStore();

  const handleChange = (val) => {
    // console.log(val);

    if (type == "send") {
      setSendCurrency(val);
    } else {
      setReceiveCurrency(val);
    }

    if (sendCurrency == receiveCurrency) {
      return;
    }
  };

  // useEffect(() => {
  //   async function getOptions() {
  //     const options = await getSelectOptions();
  //     setOptions(options);
  //     // console.log(options);
  //   }

  //   getOptions();
  // }, []);

  return (
    <Select
      value={type == "send" ? sendCurrency : receiveCurrency}
      onValueChange={handleChange}
      className="font-mono"
    >
      <SelectTrigger
        className={
          "cursor-pointer bg-neutral-500 border border-neutral-400 hover:bg-neutral-400 "
        }
      >
        <SelectValue className={"text-neutral-50 text-[0.875rem] tracking-3"} />
      </SelectTrigger>
      <SelectContent
        alignItemWithTrigger={false}
        align="end"
        className={
          "bg-neutral-600 w-[20rem] font-mono border border-neutral-400"
        }
      >
        <SelectGroup>
          {selectOptions?.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              className={"p-0 cursor-pointer "}
            >
              <div className="flex gap-3 items-center px-3.5 py-3">
                <p className="text-[0.875rem] text-neutral-50">{item.value}</p>
                <p className="text-[0.75rem] text-neutral-200">{item.label}</p>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCurrency;
