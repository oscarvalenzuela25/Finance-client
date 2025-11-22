import { useQuery } from "@tanstack/react-query";
import { getPotsOverview } from "./services";

export const useGetPotsOverview = () =>
  useQuery({
    queryKey: ["potsOverview"],
    queryFn: getPotsOverview,
  });
