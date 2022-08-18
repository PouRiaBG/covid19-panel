import { useQuery } from "@tanstack/react-query";
import { request } from "@utils/request";
import type { NewsListType } from "../types";

export const useGetNews = (key: string) => {
  return useQuery<NewsListType>([key], async () => {
    return await request("/news");
  });
};
