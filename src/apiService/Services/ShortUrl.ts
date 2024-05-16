import { TCreateShortUrl } from "@/types/shortUrl";
import { apiClient } from "../api";

export const CreateShortUrl = (payload: TCreateShortUrl) => {
  return apiClient.post("/short-url/create-short-url", payload);
};
