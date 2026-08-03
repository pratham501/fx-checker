import React from "react";
import { useDetailsStore } from "../../../stores/DetailsStore";

const DetailsHeader = () => {
  const { detailsPage, setDetailsPage } = useDetailsStore();

  return (
    <div>
      <div>
        <select
          name=""
          id=""
          className=" w-full sm:hidden mb-4 bg-neutral-700 text-neutral-50"
          value={detailsPage}
          onChange={(e) => setDetailsPage(e.target.value)}
        >
          <option value="history">HISTORY</option>
          <option value="compare">COMPARE</option>
          <option value="favourites">FAVOURITES</option>
        </select>
      </div>

      <div className=" text-neutral-50 hidden sm:flex mb-5 tracking-3 ">
        <div
          className={`border-b ${
            detailsPage == "history" ? "border-comp" : "border-neutral-400"
          } text-[1rem] p-3 transition-all ease-in-out duration-100`}
          value="history"
          onClick={(e) => setDetailsPage("history")}
        >
          HISTORY
        </div>
        <div
          className={`border-b ${
            detailsPage == "compare" ? "border-comp" : "border-neutral-400"
          } text-[1rem] p-3 transition-all ease-in-out duration-100`}
          value="compare"
          onClick={(e) => setDetailsPage("compare")}
        >
          COMPARE
        </div>
        <div
          className={`border-b ${
            detailsPage == "favourites" ? "border-comp" : "border-neutral-400"
          } text-[1rem] p-3 transition-all ease-in-out duration-100`}
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
