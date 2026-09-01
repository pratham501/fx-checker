import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  error: null,
  loadingDynamic: true,
  loding: true,
  loadingPermanent: true,
  setError: (e) => {
    set({ error: e });
  },
  setLoadingDynamic: (val) => {
    set({ loadingDynamic: val });
  },
  setLoading: (val) => {
    set({ loading: val });
  },
  setLoadingPermanent: (val) => {
    set({ loadingPermanent: val });
  },
}));
