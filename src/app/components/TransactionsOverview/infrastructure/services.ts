import { axiosV1Instance } from "@/config/axiosConfig";
import { TransactionApiReponse } from "@/types/globals";

export const getTransactionsOverview =
  async (): Promise<TransactionApiReponse> => {
    const { data } = await axiosV1Instance.get("/finance/transactions", {
      params: {
        page: 1,
        limit: 5,
      },
    });
    return data;
  };
