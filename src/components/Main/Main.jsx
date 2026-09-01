import React from "react";
import CheckRate from "./CheckRate/CheckRate";
import LiveMarket from "./LiveMarket/LiveMarket";
import Details from "./Details/Details";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
const Main = () => {
  return (
    <div id="main" className="w-full">
      <LiveMarket />
      <div className="w-full flex justify-center ">
        <div className="w-full lg:w-[72%] flex flex-col gap-10 lg:gap-8 px-4 py-8 sm:py-12 sm:px-6 md:px-8  ">
          <CheckRate />
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Main;
