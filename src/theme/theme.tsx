import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  breakpoints,
});

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  breakpoints,
});
