import React from "react";
import { useDetailsStore } from "../../../stores/DetailsStore";

const DetailsHeader = () => {
  const { detailsPage, setDetailsPage } = useDetailsStore();

  return (
    <div>
      <div className="sm:hidden mb-4 bg-neutral-700 border border-neutral-400 px-3 py-2.5 rounded-[0.5rem]">
        <select
          name=""
          id=""
          className=" w-full text-[1rem] tracking-3 text-neutral-50"
          value={detailsPage}
          onChange={(e) => setDetailsPage(e.target.value)}
        >
          <option className="bg-neutral-700" value="history">HISTORY</option>
          <option className="bg-neutral-700" value="compare">COMPARE</option>
          <option className="bg-neutral-700" value="favourites">FAVOURITES</option>
        </select>
      </div>

      <div className=" text-neutral-50 hidden sm:flex mb-5 px-4 tracking-3 ">
        <div
          className={`border-b ${
            detailsPage == "history" ? "border-comp" : "border-neutral-500"
          } text-[1rem] py-2.5 px-4 transition-all ease-in-out duration-100 cursor-pointer`}
          value="history"
          onClick={(e) => setDetailsPage("history")}
        >
          HISTORY
        </div>
        <div
          className={`border-b ${
            detailsPage == "compare" ? "border-comp" : "border-neutral-500"
          } text-[1rem] py-2.5 transition-all ease-in-out duration-100 px-4 cursor-pointer`}
          value="compare"
          onClick={(e) => setDetailsPage("compare")}
        >
          COMPARE
        </div>
        <div
          className={`border-b ${
            detailsPage == "favourites" ? "border-comp" : "border-neutral-500"
          } text-[1rem] py-2.5 transition-all ease-in-out duration-100 px-4 cursor-pointer `}
          onClick={(e) => {
            setDetailsPage("favourites");
          }}
        >
          FAVOURITES
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
