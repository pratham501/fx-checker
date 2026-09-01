import { ArrowRight } from "lucide-react";
import React from "react";
import FavouritesButton from "../../Components/FavouritesButton";
import { Triangle } from "lucide-react";

const FavouritesCard = ({ dataObj }) => {
  const pairs = dataObj.pair?.split("/");

  return (
    <div className="bg-neutral-600 border border-neutral-500 rounded-[0.625rem] py-3 px-4 flex justify-between ">
      <div className="flex items-center gap-2 text-neutral-50 text-[0.875rem] tracking-3">
        <p>{pairs[0]}</p>
        <ArrowRight strokeWidth={1} size={17} className="" />
        <p>{pairs[1]}</p>
      </div>
      <div className="flex gap-5 items-center">
        <div className=" flex flex-col items-end ">
          <p className="text-[1rem] tracking-3 text-neutral-50">
            {dataObj.rate.toFixed(4)}
          </p>
          <div
            className={` flex gap-1 items-center ${
              dataObj.percentage >= 0 ? "text-profit" : "text-loss"
            } text-[0.625rem] `}
          >
            <Triangle
              size={8}
              strokeWidth={0}
              fill={dataObj.percentage >= 0 ? "#42eb05" : "#ff4141"}
              className={`${dataObj.percentage < 0 ? "rotate-180" : ""}`}
            />
            <p>
              {dataObj.percentage >= 0
                ? `+${dataObj.percentage}`
                : dataObj.percentage}
              %
            </p>
          </div>
        </div>
        <FavouritesButton pair={dataObj.pair} />
      </div>
    </div>
  );
};

export default FavouritesCard;
