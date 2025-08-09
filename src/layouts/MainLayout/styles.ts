import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(({ theme }) => ({
  background: theme.palette.beige100.main,
  width: "100dvw",
  height: "100dvh",
  display: "flex",
}));

export const SidebarDummy = styled("div")(({ theme }) => ({
  display: "flex",
  width: "300px",
  height: "100dvh",
  flexDirection: "column",
  background: theme.palette.grey900.main,
  [theme.breakpoints.down("tablet")]: {
    display: "none",
  },
}));

export const RightContent = styled("div")({
  width: "100%",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
});

export const TopbarDummy = styled("div")(({ theme }) => ({
  width: "100%",
  height: "64px",
  display: "flex",
  background: theme.palette.grey900.main,
}));

export const SidebarMobileDummy = styled("div")(({ theme }) => ({
  width: "100dvw",
  background: theme.palette.grey900.main,
  borderRadius: "8px 8px 0px 0px",
  marginTop: "auto",
  display: "none",
  [theme.breakpoints.down("tablet")]: {
    padding: "8px 40px 0px 40px",
    display: "flex",
    height: "74px",
  },
  [theme.breakpoints.down("mobile")]: {
    padding: "8px 16px 0px 16px",
    display: "flex",
    height: "52px",
  },
}));
