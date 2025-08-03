"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC, PropsWithChildren, useMemo } from "react";

type Props = PropsWithChildren;

const MuiProvider: FC<Props> = ({ children }) => {
  const theme = useMemo(() => createTheme(), []);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiProvider;
