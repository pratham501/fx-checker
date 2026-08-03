import { create } from "zustand";

export const useCompareStore = create((set) => ({
  compareValues: null,
}));

export const currenciesForCompare = [
  "INR",
  "JPY",
  "GBP",
  "CNY",
  "CAD",
  "USD",
  "AUD",
  "CHF",
  "HKD",
  "NZD",
];
