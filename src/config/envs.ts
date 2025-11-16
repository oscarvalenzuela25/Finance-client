const envs = {
  API_V1_URL: process.env.NEXT_PUBLIC_API_V1_URL || "",
  AUTH_TOKEN: process.env.NEXT_PUBLIC_AUTH_TOKEN || "",
  PALETTE_BY_COMPANY_AVAILABLE:
    process.env.NEXT_PUBLIC_PALETTE_BY_COMPANY_AVAILABLE === "true",
};

export default envs;
