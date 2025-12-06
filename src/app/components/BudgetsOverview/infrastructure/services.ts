import { axiosV1Instance } from "@/config/axiosConfig";
import { BudgetApiResponse } from "@/types/globals";

export const getBudgetsOverview = async (): Promise<BudgetApiResponse> => {
  const { data } = await axiosV1Instance.get("/finance/budgets", {
    params: {
      limit: 4,
    },
  });
  return data;
};
