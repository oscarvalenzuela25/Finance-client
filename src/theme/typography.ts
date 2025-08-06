/* eslint-disable @typescript-eslint/no-explicit-any */
import "@mui/material/styles";
import "@mui/material/Typography";
import type { ThemeOptions } from "@mui/material/styles";

type MyTypographyOptions = Exclude<
  NonNullable<ThemeOptions["typography"]>,
  (...args: any[]) => any
>;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    textPreset1Bold: React.CSSProperties;
    textPreset2Bold: React.CSSProperties;
    textPreset3Bold: React.CSSProperties;
    textPreset4: React.CSSProperties;
    textPreset4Bold: React.CSSProperties;
    textPreset5: React.CSSProperties;
    textPreset5Bold: React.CSSProperties;
    text: React.CSSProperties;
    captionXs: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    textPreset1Bold?: React.CSSProperties;
    textPreset2Bold?: React.CSSProperties;
    textPreset3Bold?: React.CSSProperties;
    textPreset4?: React.CSSProperties;
    textPreset4Bold?: React.CSSProperties;
    textPreset5?: React.CSSProperties;
    textPreset5Bold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    textPreset1Bold: true;
    textPreset2Bold: true;
    textPreset3Bold: true;
    textPreset4: true;
    textPreset4Bold: true;
    textPreset5: true;
    textPreset5Bold: true;
  }
}

const typography = {
  fontFamily:
    "var(--font-public-sans), Inter, Roboto, Helvetica, Arial, sans-serif",
  textPreset1Bold: {
    fontSize: "32px",
    lineHeight: "120%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  textPreset2Bold: {
    fontSize: "20px",
    lineHeight: "120%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  textPreset3Bold: {
    fontSize: "16px",
    lineHeight: "150%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  textPreset4: {
    fontSize: "14px",
    lineHeight: "150%",
    fontWeight: 400,
    letterSpacing: "0px",
  },
  textPreset4Bold: {
    fontSize: "14px",
    lineHeight: "150%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  textPreset5: {
    fontSize: "12px",
    lineHeight: "150%",
    fontWeight: 400,
    letterSpacing: "0px",
  },
  textPreset5Bold: {
    fontSize: "12px",
    lineHeight: "150%",
    fontWeight: 700,
    letterSpacing: "0px",
  },
  body1: {
    fontSize: "14px",
  },
  body2: {
    fontSize: "12px",
  },
  button: {
    fontSize: "14px",
    textTransform: "none",
  },
} satisfies MyTypographyOptions;

export default typography;
