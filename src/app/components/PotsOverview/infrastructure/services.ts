import { axiosV1Instance } from "@/config/axiosConfig";
import { PotApiResponse } from "@/types/globals";

export const getOverviewPots = async (): Promise<PotApiResponse> => {
  const { data } = await axiosV1Instance.get("/finance/pots", {
    params: {
      limit: 4,
    },
  });
  return data;
};
