import { useQuery } from "@tanstack/react-query";
import { request } from "@utils/request";
import type { ViewedNewsListType } from "../types";

export const useGetViewedNews = (key: string) => {
  return useQuery<ViewedNewsListType>([key], async () => {
    return await request("/mostviewed");
  });
};
