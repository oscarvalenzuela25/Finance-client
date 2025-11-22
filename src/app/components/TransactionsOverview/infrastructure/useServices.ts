import { useQuery } from "@tanstack/react-query";
import { getTransactionsOverview } from "./services";

export const useGetTransactionsOverview = () =>
  useQuery({
    queryKey: ["transactionsOverview"],
    queryFn: getTransactionsOverview,
  });
