import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(({ theme }) => ({
  background: theme.palette.beige100.main,
  width: "100dvw",
  minHeight: "100dvh",
  display: "flex",
}));

export const RightContent = styled("div")({
  width: "100%",
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
});

export const TopbarDummy = styled("div")(({ theme }) => ({
  width: "100%",
  height: "64px",
  display: "flex",
  background: theme.palette.grey900.main,
}));
