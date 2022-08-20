import { useMutation } from "@tanstack/react-query";

import type { Username } from "../types";

export const useLoginUser = () => {
  return useMutation<Username, unknown, Username>(async (data) => {
    return fetch("/login", { method: "POST", body: JSON.stringify(data) })
      .then((response) => response.json())
      .then((data) => data);
  });
};
