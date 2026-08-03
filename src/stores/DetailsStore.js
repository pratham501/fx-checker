import { create } from "zustand";

export const useDetailsStore = create((set) => ({
  detailsPage: "history",
  setDetailsPage: (val) => {
    set({ detailsPage: val });
  },
}));
