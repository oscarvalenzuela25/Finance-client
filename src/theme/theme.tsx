import { createTheme } from "@mui/material/styles";
import { darkPalette, lightPalette } from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import { MuiDarkTextField } from "./components/TextField";
import { MuiDarkSelect } from "./components/Select";
import { MuiDarkMenu } from "./components/Menu";

export const darkTheme = createTheme({
  palette: darkPalette,
  typography,
  breakpoints,
  components: {
    MuiTextField: MuiDarkTextField,
    MuiSelect: MuiDarkSelect,
    MuiMenu: MuiDarkMenu,
  },
});

export const lightTheme = createTheme({
  palette: lightPalette,
  typography,
  breakpoints,
  components: {
    MuiTextField: MuiDarkTextField,
    MuiSelect: MuiDarkSelect,
    MuiMenu: MuiDarkMenu,
  },
});
