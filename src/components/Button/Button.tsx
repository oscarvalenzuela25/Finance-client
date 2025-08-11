import { ButtonProps } from "@mui/material/Button";
import { FC } from "react";
import {
  StyledButtonDestroy,
  StyledButtonPrimary,
  StyledButtonSecondary,
  StyledButtonTertiary,
} from "./styles";
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    beige100: true;
    beige500: true;
    grey100: true;
    grey300: true;
    grey500: true;
    grey900: true;
    green: true;
    yellow: true;
    cyan: true;
    navy: true;
    red: true;
    purpleSecondary: true;
    purpleTertiary: true;
    turquoise: true;
    brown: true;
    magenta: true;
    blue: true;
    navyGrey: true;
    armyGreen: true;
    gold: true;
    orange: true;
  }
}

export const ButtonPrimary: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButtonPrimary color="grey900" variant="contained" {...props}>
    {children}
  </StyledButtonPrimary>
);

export const ButtonSecondary: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButtonSecondary color="beige100" variant="contained" {...props}>
    {children}
  </StyledButtonSecondary>
);

export const ButtonTertiary: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButtonTertiary color="inherit" variant="text" {...props}>
    {children}
  </StyledButtonTertiary>
);

export const ButtonDestroy: FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButtonDestroy color="red" variant="contained" {...props}>
    {children}
  </StyledButtonDestroy>
);
