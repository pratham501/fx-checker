import React from "react";
import SelectCurrency from "./SelectCurrency";
import { useValueStore } from "../../../stores/ValueStore";
import { useDebounce } from "use-debounce";

const RateContainer = ({ type }) => {
  const { inputValue, setInputValue, currRate } = useValueStore();
  const [debouncedCalculatedValue] = useDebounce(
    inputValue == "" ? "0" : (inputValue * currRate).toFixed(2).toString(),
    1000
  );

  const handleKeyPress = (e) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ".",
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (e.key == "." && inputValue.includes(".")) {
      e.preventDefault();
    }

    if (inputValue == "" && (e.key == "0" || e.key == ".")) {
      e.preventDefault();
    }

    if (allowedKeys.includes(e.key)) {
      return;
    }

    if (
      (e.ctrlKey || e.metaKey) &&
      ["a", "c", "v", "x", "z", "y"].includes(e.key.toLowerCase())
    ) {
      return;
    }

    e.preventDefault();
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > 8) {
      return;
    }

    setInputValue(event.target.value);
  };

  const handlePaste = (e) => {
    const allowed = /^([1-9]\d*)(\.\d+)?$/;
    const pastedText = e.clipboardData.getData("text");
    if (!allowed.test(pastedText)) {
      e.preventDefault(); // Block invalid paste
    }
  };

  return (
    <div className="w-full border border-neutral-500 bg-neutral-600 p-4 rounded-[16px] flex flex-col ">
      <p className="uppercase">{type}</p>
      <div className="flex items-center justify-between gap-4 mt-5 w-full">
        <div className="w-full">
          {type == "send" ? (
            <input
              type="text"
              value={inputValue}
              inputMode="numeric"
              onPaste={handlePaste}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => e.preventDefault()}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              className="border-b border-neutral-200 outline-0 text-[2rem] w-[65%] "
            />
          ) : (
            <p className="border-b border-neutral-200 text-comp w-[65%] no-scrollbar overflow-scroll text-[2rem] ">
              {debouncedCalculatedValue}
            </p>
          )}
        </div>

        <SelectCurrency type={type} />
      </div>
    </div>
  );
};

export default RateContainer;
