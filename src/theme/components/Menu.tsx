import { Components, Theme } from "@mui/material";

export const MuiDarkMenu: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey900.main,
    }),
  },
};
