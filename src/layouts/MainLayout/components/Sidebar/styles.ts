import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")<{ isMinimized?: boolean }>(
  ({ theme, isMinimized }) => ({
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: isMinimized ? 88 : 300,
    minWidth: isMinimized ? 88 : 300,
    transition: "all 300ms ease",
    height: "100dvh",
    padding: isMinimized ? "40px 0px 24px 0px" : "40px 36px 24px 0px",
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
