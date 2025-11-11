"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import axiosInstance from "./axiosConfig";
import { darkPalette, lightPalette } from "@/theme/palette";
import typography from "./../theme/typography";
import breakpoints from "./../theme/breakpoints";
import { MuiDarkTextField } from "@/theme/components/TextField";
import { MuiDarkSelect } from "@/theme/components/Select";
import { MuiDarkMenu } from "@/theme/components/Menu";
import { PaletteOptions } from "@mui/material";
import { useGetTheme } from "@/hooks/useAppConfig";
import envs from "./envs";

type Props = PropsWithChildren;

const createMuiTheme = (
  newPalettes: { darkPalette: PaletteOptions; lightPalette: PaletteOptions },
  currentTheme: "light" | "dark"
) => {
  if (currentTheme === "dark") {
    const newDarkPalette = newPalettes?.darkPalette || darkPalette;
    return createTheme({
      palette: newDarkPalette,
      typography,
      breakpoints,
      components: {
        MuiTextField: MuiDarkTextField,
        MuiSelect: MuiDarkSelect,
        MuiMenu: MuiDarkMenu,
      },
    });
  } else {
    const newLightPalette = newPalettes?.lightPalette || lightPalette;

    return createTheme({
      palette: newLightPalette,
      typography,
      breakpoints,
      components: {
        MuiTextField: MuiDarkTextField,
        MuiSelect: MuiDarkSelect,
        MuiMenu: MuiDarkMenu,
      },
    });
  }
};

const MuiProvider: FC<Props> = ({ children }) => {
  const currentTheme = useGetTheme();

  const {
    data: companyPalettes = {},
    isSuccess: companyPalettesIsSucess,
    isError: companyPalettesIsError,
  } = useQuery({
    queryKey: ["fetchPalettes"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/finance/palettes");
      return data;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: envs.PALETTE_BY_COMPANY_AVAILABLE,
  });

  const showContent =
    companyPalettesIsSucess ||
    companyPalettesIsError ||
    !envs.PALETTE_BY_COMPANY_AVAILABLE;

  const theme = createMuiTheme(companyPalettes, currentTheme);

  return (
    <ThemeProvider theme={theme}>{showContent ? children : null}</ThemeProvider>
  );
};

export default MuiProvider;
