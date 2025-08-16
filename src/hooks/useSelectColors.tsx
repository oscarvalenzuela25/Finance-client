"use client";
import { styled } from "@mui/material";
import { Palette, PaletteColor } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

type PaletteMainKeys = {
  [K in keyof Palette]: Palette[K] extends PaletteColor ? K : never;
}[keyof Palette];

const MenuItemColorContained = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const MenuItemColor = styled("div")<{ color: PaletteMainKeys }>(
  ({ theme, color }) => ({
    width: "16px",
    height: "16px",
    borderRadius: "100%",
    backgroundColor: theme.palette[color].main,
  })
);

const MenuItemText = styled("p")(({ theme }) => ({
  ...theme.typography.textPreset4,
  margin: 0,
  color: theme.palette.grey900.main,
}));

const useSelectColors = () => {
  const { t } = useTranslation();
  const getMenuItem = (text: string, color: PaletteMainKeys) => (
    <MenuItemColorContained>
      <MenuItemColor color={color} />
      <MenuItemText>{text}</MenuItemText>
    </MenuItemColorContained>
  );

  const colorOptions = [
    {
      value: "green",
      content: getMenuItem(t("common:colors.green"), "green"),
    },
    {
      value: "yellow",
      content: getMenuItem(t("common:colors.yellow"), "yellow"),
    },
    {
      value: "cyan",
      content: getMenuItem(t("common:colors.cyan"), "cyan"),
    },
    {
      value: "navy",
      content: getMenuItem(t("common:colors.navy"), "navy"),
    },
    {
      value: "red",
      content: getMenuItem(t("common:colors.red"), "red"),
    },
    {
      value: "purple",
      content: getMenuItem(t("common:colors.purple"), "purpleSecondary"),
    },
    {
      value: "turquoise",
      content: getMenuItem(t("common:colors.turquoise"), "turquoise"),
    },
    {
      value: "brown",
      content: getMenuItem(t("common:colors.brown"), "brown"),
    },
    {
      value: "magenta",
      content: getMenuItem(t("common:colors.magenta"), "magenta"),
    },
    {
      value: "blue",
      content: getMenuItem(t("common:colors.blue"), "blue"),
    },
    {
      value: "navyGrey",
      content: getMenuItem(t("common:colors.navyGrey"), "navyGrey"),
    },
    {
      value: "armyGreen",
      content: getMenuItem(t("common:colors.armyGreen"), "armyGreen"),
    },
    {
      value: "pink",
      content: getMenuItem(t("common:colors.pink"), "purpleTertiary"),
    },
    {
      value: "gold",
      content: getMenuItem(t("common:colors.gold"), "gold"),
    },
    {
      value: "orange",
      content: getMenuItem(t("common:colors.orange"), "orange"),
    },
  ];

  return {
    colorOptions,
  };
};

export default useSelectColors;
