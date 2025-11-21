import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  background: theme.palette.common.white,
  borderRadius: "12px",
  padding: "32px",
}));

export const StyledTitleContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledBodyContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  [theme.breakpoints.up("tablet")]: {
    flexWrap: "nowrap",
  },
}));

export const StyledSummaryContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  backgroundColor: theme.palette.beige100.main,
  borderRadius: "12px",
  padding: "20px 16px",
  minWidth: "calc(247px - 32px)",
}));

export const StyledSummaryTitleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const StyledDetailsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
});

export const StyledDetails = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "16px",
  backgroundColor: theme.palette.common.white,
  minWidth: "130px",
}));

export const StyledDetailsColors = styled("div")<{ color: string }>(
  ({ color }) => ({
    width: "4px",
    height: "43px",
    borderRadius: "8px",
    backgroundColor: color,
  })
);

export const StyledDetailsTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
