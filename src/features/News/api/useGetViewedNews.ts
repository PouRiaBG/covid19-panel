import { useQuery } from "@tanstack/react-query";
import type { ViewedNewsListType } from "../types";

export const useGetViewedNews = () => {
  return useQuery<ViewedNewsListType>(["mostviewd"], async () => {
    return fetch("/mostviewed")
      .then((response) => response.json())
      .then((data) => data);
  });
};
