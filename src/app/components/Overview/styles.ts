import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(calc(337px - 48px), 1fr))",
  gap: "24px",
  width: "100%",
  justifyContent: "center",
});

export const StyledCardContainer = styled("div")<{ type: "black" | "white" }>(
  ({ type, theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    padding: "24px",
    gap: "12px",
    width: "100%",
    backgroundColor: theme.palette.common[type],
  })
);
