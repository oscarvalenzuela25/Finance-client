import { styled } from "@mui/material/styles";

export const StyledContainer = styled("div")(({ theme }) => ({
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

export const StyledContainerMenuItems = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",

  // Solo scroll horizontal
  overflowX: "auto",
  overflowY: "hidden",

  // Evita que el contenido salte de línea
  whiteSpace: "nowrap",

  // Scroll fino en Firefox
  scrollbarWidth: "thin",
  scrollbarColor: "#888 transparent",

  // Scroll fino en WebKit (Chrome, Safari, Edge)
  "&::-webkit-scrollbar": {
    height: "4px", // más delgado para horizontal
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});
