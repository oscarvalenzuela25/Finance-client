import React, { CSSProperties, FC, ReactNode } from "react";
import {
  StyledMenuItemContainerLaptop,
  StyledMenuItemContainerMobile,
  StyledMenuItemContainerTablet,
  StyledTextLaptop,
  StyledTextTablet,
} from "./styles";
import useBreakpoint from "@/hooks/useBreakpoint";

type Props = {
  label: string;
  selected?: boolean;
  icon: ReactNode;
  isMinimized?: boolean;
  sx?: CSSProperties;
  onClick?: () => void;
};

const SidebarMenuItem: FC<Props> = ({
  label,
  selected,
  icon,
  isMinimized,
  sx = {},
  onClick,
}) => {
  const currentBreakpoint = useBreakpoint();

  if (currentBreakpoint === "mobile") {
    return (
      <StyledMenuItemContainerMobile
        selected={selected}
        onClick={onClick}
        sx={{ ...sx }}
      >
        {icon}
      </StyledMenuItemContainerMobile>
    );
  }

  if (currentBreakpoint === "tablet") {
    return (
      <StyledMenuItemContainerTablet
        selected={selected}
        onClick={onClick}
        sx={{ ...sx }}
      >
        {icon}
        <StyledTextTablet selected={selected} variant="textPreset5Bold">
          {label}
        </StyledTextTablet>
      </StyledMenuItemContainerTablet>
    );
  }

  return (
    <StyledMenuItemContainerLaptop
      selected={selected}
      onClick={onClick}
      sx={{ ...sx }}
    >
      {icon}
      <StyledTextLaptop
        selected={selected}
        variant="textPreset3Bold"
        isMinimized={isMinimized}
      >
        {label}
      </StyledTextLaptop>
    </StyledMenuItemContainerLaptop>
  );
};

export default SidebarMenuItem;
