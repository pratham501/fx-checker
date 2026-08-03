import { create } from "zustand";

export const useLoadingStore = create((set) => ({
  error: null,
  loadingStart: true,
  loding: true,
  setError: (e) => {
    set({ error: e });
  },
  setLoadingStart: (val) => {
    set({ loadingStart: val });
  },
  setLoading: (val) => {
    set({ loading: val });
  },
}));
