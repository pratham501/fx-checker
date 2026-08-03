import { create } from "zustand";

export const useHistoryStore = create((set) => ({
  timelineValue: "1m",
  setTimelineValue: (val) => {
    set({ timelineValue: val });
  },
  change: 0,
  percentageChange: 0,
  fixedToolTip: false,
  toggleFixedToolTip: () => {
    set((state) => ({ fixedToolTip: !state.fixedToolTip }));
  },
}));
