import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "32px",
  backgroundColor: theme.palette.common.white,
  borderRadius: "12px",
}));

export const StyledTitleContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const StyledBodyContainer = styled("div")({
  display: "flex",
  minHeight: "200px",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
});

export const StyledChartContainer = styled("div")({
  display: "flex",
});

export const StyledCategoriesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
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
