import { useQuery } from "@tanstack/react-query";
import { AllStats } from "../types";

export const useGetStats = () => {
  return useQuery<AllStats>(["countries"], async () => {
    return fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((finalData) => finalData);
  });
};
