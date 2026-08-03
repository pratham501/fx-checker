import { NutOffIcon } from "lucide-react";
import { create } from "zustand";

export const useValueStore = create((set) => ({
  inputValue: "1000",
  setInputValue: (val) => {
    set({ inputValue: val });
  },
  sendCurrency: "INR",
  setSendCurrency: (val) => {
    set({ sendCurrency: val });
  },
  receiveCurrency: "EUR",
  setReceiveCurrency: (val) => {
    set({ receiveCurrency: val });
  },
  currRate: null,
  currenciesOptions: null,
}));
