import { create } from "axios";

const url = import.meta.env.VITE_RATES_API_URL;

export const httpClient = create({
  baseURL: url,
});
