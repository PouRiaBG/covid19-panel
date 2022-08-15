import { useQuery } from "@tanstack/react-query";
import type { NewsListType } from "../types";

export const useGetNews = () => {
  return useQuery<NewsListType>(["newsList"], async () => {
    return fetch("/news")
      .then((response) => response.json())
      .then((data) => data);
  });
};
