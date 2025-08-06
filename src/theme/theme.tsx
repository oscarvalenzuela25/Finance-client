import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import typography from "./typography";

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
});

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
});
