import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "24px",
  width: "100%",
});

export const StyledCardContainer = styled("div")<{ type: "black" | "white" }>(
  ({ type, theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    padding: "24px",
    gap: "12px",
    width: "calc(100% / 3 - 24px * 2 / 3)",
    minWidth: "calc(337px - 48px)",
    backgroundColor:
      type === "black"
        ? theme.palette.common.black
        : theme.palette.common.white,
    [theme.breakpoints.down("tablet")]: {
      width: "100%",
    },
  })
);
