import { useQuery } from "@tanstack/react-query";
import { request } from "@utils/request";
import { AllStats } from "../types";

export const useGetStats = (key: string) => {
  return useQuery<AllStats>([key], async () => {
    return request(`${process.env.NEXT_PUBLIC_ENDPOINT_API}/all`).then(
      (finalData) => finalData
    );
  });
};
