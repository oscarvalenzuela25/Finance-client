import { useQuery } from "@tanstack/react-query";
import { getBudgetsOverview } from "./services";

export const useGetBudgetsOverview = () =>
  useQuery({
    queryKey: ["budgetsOverview"],
    queryFn: getBudgetsOverview,
  });
