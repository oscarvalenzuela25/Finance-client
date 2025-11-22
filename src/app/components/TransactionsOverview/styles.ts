import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  background: theme.palette.common.white,
  borderRadius: "12px",
  padding: "32px",
  width: "100%",
}));

export const StyledTitleContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledBodyContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const StyledTransactionsRow = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",
});

export const StyledTransactionsPersonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const StyledTransactionsAmountContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "8px",
});

export const StyledTransactionsDivider = styled("div")(({ theme }) => ({
  height: "1px",
  backgroundColor: theme.palette.grey100.main,
  width: "100%",
}));
