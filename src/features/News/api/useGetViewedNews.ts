import { useQuery } from "@tanstack/react-query";

export const useGetViewedNews = () => {
  return useQuery(["mostviewd"], async () => {
    return fetch("/mostviewed")
      .then((response) => response.json())
      .then((data) => data);
  });
};
