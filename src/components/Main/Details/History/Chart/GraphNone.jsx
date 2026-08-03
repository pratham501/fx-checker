import { useValueStore } from "@/stores/ValueStore";
import React from "react";

const GraphNone = () => {
  const { sendCurrency, receiveCurrency } = useValueStore();

  return (
    <div className="pt-10 pb-12 flex flex-col items-center gap-4">
      <p className="text-[1.25rem] text-neutral-100 tracking-1">
        No chart data available
      </p>
      <p className="text-[0.875rem] text-neutral-200 tracking-3">
        We couldn't load rate history for {sendCurrency}/{receiveCurrency}
      </p>
    </div>
  );
};

export default GraphNone;
