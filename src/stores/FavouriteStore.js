import { create } from "zustand";

export const useFavouriteStore = create((set) => ({
  favData: [],
}));
