import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")<{ isMinimized?: boolean }>(
  ({ theme, isMinimized }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: isMinimized ? 100 : 300,
    minWidth: isMinimized ? 100 : 300,
    minHeight: "100dvh",
    padding: isMinimized ? "40px 12px 24px 0px" : "40px 36px 24px 0px",
    transition: "width 300ms ease, min-width 300ms ease, padding 300ms ease",
    background: theme.palette.grey900.main,
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },
  })
);

export const StyledContainerTitle = styled("div")({
  padding: "0px 0px 64px 36px",
});

export const StyledContainerMenuItems = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});
