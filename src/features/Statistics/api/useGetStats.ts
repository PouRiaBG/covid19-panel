import { useQuery } from "@tanstack/react-query";

export const useGetStats = () => {
  return useQuery(["countri"], async () => {
    return fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((finalData) => finalData);
  });
};
