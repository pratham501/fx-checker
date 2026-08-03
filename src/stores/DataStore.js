import { create } from "zustand";

export const useDataStore = create((set) => ({
  liveMarketData: null,
  setLiveMarketData: (data) => {
    set({ liveMarketData: data });
  },
  oneMonthData: null,
  setOneMonthData: (val) => {
    set({ oneMonthData: val });
  },
  threeMonthData: null,
  setThreeMonthData: (val) => {
    set({ threeMonthData: val });
  },
  oneYearData: null,
  setOneYearData: (val) => {
    set({ oneYearData: val });
  },
}));
