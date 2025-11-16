import { useQuery } from "@tanstack/react-query";
import { fetchOverviewData } from "./services";

export const useFetchOverviewData = () =>
  useQuery({
    queryKey: ["overviewData"],
    queryFn: fetchOverviewData,
  });
