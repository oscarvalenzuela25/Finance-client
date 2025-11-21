import { useQuery } from "@tanstack/react-query";
import { getOverviewPots } from "./services";

export const useGetOverviewPots = () =>
  useQuery({
    queryKey: ["overviewPots"],
    queryFn: getOverviewPots,
  });
