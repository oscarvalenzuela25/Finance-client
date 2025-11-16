import { axiosV1Instance } from "@/config/axiosConfig";

export const fetchOverviewData = async () => {
  const { data } = await axiosV1Instance.get("/finance/overview");
  return data;
};
