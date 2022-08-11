import { useQuery } from "@tanstack/react-query";

export const useGetNews = () => {
  return useQuery(["newsList"], async () => {
    return fetch("/news")
      .then((response) => response.json())
      .then((data) => data);
  });
};
