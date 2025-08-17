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

const useColors = () => {
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

  type RGB = { r: number; g: number; b: number };

  const clamp = (v: number, min = 0, max = 1): number =>
    Math.min(max, Math.max(min, v));

  const hexToRgb = (hex: string): RGB => {
    const h = hex.replace("#", "").trim();
    const s =
      h.length === 3
        ? h
            .split("")
            .map((c) => c + c)
            .join("")
        : h.padEnd(6, "0").slice(0, 6);
    const num = parseInt(s, 16);
    return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
  };

  const rgbToHex = ({ r, g, b }: RGB): string =>
    `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;

  const relativeLuminance = ({ r, g, b }: RGB): number => {
    const srgb = [r, g, b]
      .map((v) => v / 255)
      .map((v) =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
      );
    return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  };

  const contrastRatio = (hex1: string, hex2: string): number => {
    const L1 = relativeLuminance(hexToRgb(hex1));
    const L2 = relativeLuminance(hexToRgb(hex2));
    const [a, b] = L1 > L2 ? [L1, L2] : [L2, L1];
    return (a + 0.05) / (b + 0.05);
  };

  const hash = (s: string): number => {
    let h = 2166136261; // FNV-1a base
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = (h * 16777619) >>> 0;
    }
    return h >>> 0;
  };

  const hslToRgb = (h: number, s: number, l: number): RGB => {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const hp = h / 60;
    const x = c * (1 - Math.abs((hp % 2) - 1));
    let [r1, g1, b1] = [0, 0, 0];

    if (0 <= hp && hp < 1) [r1, g1, b1] = [c, x, 0];
    else if (1 <= hp && hp < 2) [r1, g1, b1] = [x, c, 0];
    else if (2 <= hp && hp < 3) [r1, g1, b1] = [0, c, x];
    else if (3 <= hp && hp < 4) [r1, g1, b1] = [0, x, c];
    else if (4 <= hp && hp < 5) [r1, g1, b1] = [x, 0, c];
    else if (5 <= hp && hp < 6) [r1, g1, b1] = [c, 0, x];

    const m = l - c / 2;
    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255),
    };
  };

  const hslToHex = (h: number, s: number, l: number): string =>
    rgbToHex(hslToRgb(h, s, l));

  const normalizeHex = (hex: string): string => {
    let h = hex.trim().toLowerCase();
    if (!h.startsWith("#")) h = "#" + h;
    return h;
  };

  const pickAvatarBg = (
    seed?: string,
    textHex?: string,
    minContrast = 4.5
  ): { bg: string; text: string } => {
    const baseSeed =
      seed && seed.trim().length ? seed : Math.random().toString(36);
    const h = hash(baseSeed) % 360;
    const s = 0.55;
    const lightnessCandidates = [0.35, 0.45, 0.55, 0.65];

    let chosenBg = "#cccccc";

    if (textHex) {
      const targetText = normalizeHex(textHex);
      for (const l of lightnessCandidates) {
        const bgHex = hslToHex(h, s, clamp(l));
        if (contrastRatio(bgHex, targetText) >= minContrast) {
          chosenBg = bgHex;
          break;
        }
      }
      if (contrastRatio(chosenBg, targetText) < minContrast) {
        const darker = hslToHex(h, s, 0.28);
        const lighter = hslToHex(h, s, 0.72);
        chosenBg =
          contrastRatio(darker, targetText) > contrastRatio(lighter, targetText)
            ? darker
            : lighter;
      }
      return { bg: chosenBg, text: targetText };
    } else {
      let best: { bg: string; text: string; ratio: number } | null = null;
      for (const l of lightnessCandidates) {
        const bgHex = hslToHex(h, s, clamp(l));
        const ratioWhite = contrastRatio(bgHex, "#ffffff");
        const ratioBlack = contrastRatio(bgHex, "#000000");
        const useWhite = ratioWhite >= ratioBlack;
        const text = useWhite ? "#ffffff" : "#000000";
        const ratio = Math.max(ratioWhite, ratioBlack);
        if (!best || ratio > best.ratio) best = { bg: bgHex, text, ratio };
      }
      if (best!.ratio < minContrast) {
        const darker = hslToHex(h, s, 0.28);
        const lighter = hslToHex(h, s, 0.72);
        const ratioDWhite = contrastRatio(darker, "#ffffff");
        const ratioDBlack = contrastRatio(darker, "#000000");
        const ratioLWhite = contrastRatio(lighter, "#ffffff");
        const ratioLBlack = contrastRatio(lighter, "#000000");
        const options = [
          {
            bg: darker,
            text: ratioDWhite >= ratioDBlack ? "#ffffff" : "#000000",
            ratio: Math.max(ratioDWhite, ratioDBlack),
          },
          {
            bg: lighter,
            text: ratioLWhite >= ratioLBlack ? "#ffffff" : "#000000",
            ratio: Math.max(ratioLWhite, ratioLBlack),
          },
        ];
        options.sort((a, b) => b.ratio - a.ratio);
        best = options[0];
      }
      return { bg: best!.bg, text: best!.text };
    }
  };

  return {
    colorOptions,
    pickAvatarBg,
  };
};

export default useColors;
