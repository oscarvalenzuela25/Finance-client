import React from "react";
import { StyledContainer, StyledContainerMenuItems } from "./styles";
import SidebarMenuItem from "../SidebarMenuItem";
import useMainLayout from "../../hooks/useMainLayout";

const SidebarMobile = () => {
  const { menuItems } = useMainLayout();

  return (
    <StyledContainer>
      <StyledContainerMenuItems>
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isMinimized={item.isMinimized}
            selected={item.selected}
            onClick={item.onClick}
          />
        ))}
      </StyledContainerMenuItems>
    </StyledContainer>
  );
};

export default SidebarMobile;
