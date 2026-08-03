import React from "react";

const FavouriteEmpty = () => {
  return (
    <div className="pt-10 pb-12 flex flex-col items-center gap-4">
      <p className="text-[1.25rem] text-neutral-100 tracking-1">
        No pinned pairs yet
      </p>
      <p className="text-[0.875rem] text-neutral-200 tracking-3">
        Pin a pair to track its rate here
      </p>
    </div>
  );
};

export default FavouriteEmpty;
