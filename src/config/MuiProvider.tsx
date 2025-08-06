"use client";

import { darkTheme, lightTheme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const MuiProvider: FC<Props> = ({ children }) => {
  const isDarkTheme = true;
  const theme = isDarkTheme ? darkTheme : lightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiProvider;
