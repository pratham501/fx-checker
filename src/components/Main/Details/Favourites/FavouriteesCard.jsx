import { ArrowRight } from "lucide-react";
import React from "react";
import FavouritesButton from "../../Components/FavouritesButton";

const FavouritesCard = ({ dataObj }) => {
  const pairs = dataObj.pair?.split("/");

  return (
    <div className="bg-neutral-600 border-neutral-500 p-3 flex justify-between ">
      <div className="flex gap-2 text-neutral-50 text-[0.875rem] p-3 ">
        <p>{pairs[0]}</p>
        <ArrowRight className="" />
        <p>{pairs[1]}</p>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <p>{dataObj.rate.toFixed(4)}</p>
          <p>
            {dataObj.percentage > 0
              ? `+${dataObj.percentage}`
              : dataObj.percentage}
            %
          </p>
        </div>
        <FavouritesButton pair={dataObj.pair} />
      </div>
    </div>
  );
};

export default FavouritesCard;
