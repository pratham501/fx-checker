import React from "react";

const CompareEmpty = () => {
  return (
    <div className="pt-10 pb-12 flex flex-col items-center gap-4">
      <p className="text-[1.25rem] text-neutral-100 tracking-1">
        No comparison available
      </p>
      <p className="text-[0.875rem] text-neutral-200 tracking-3">
        Enter amount in SEND above to see comparisons
      </p>
    </div>
  );
};

export default CompareEmpty;
