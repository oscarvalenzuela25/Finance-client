"use client";
import { useGetTheme, useToggleTheme } from "@/hooks/useAppConfig";
import React, { FC } from "react";
import SunIcon from "./components/SunIcon";
import MoonIcon from "./components/MoonIcon";
import { IconButton } from "@mui/material";

const ThemeController: FC = () => {
  const currentTheme = useGetTheme();
  const handleToggleTheme = useToggleTheme();

  return (
    <IconButton onClick={handleToggleTheme} color="inherit">
      {currentTheme === "dark" ? (
        <SunIcon color="inherit" />
      ) : (
        <MoonIcon color="inherit" />
      )}
    </IconButton>
  );
};
export default ThemeController;
