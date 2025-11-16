import React from "react";
import Image from "next/image";
import logo from "@/assets/imgs/logo.svg";
import logoIcon from "@/assets/imgs/logoIcon.svg";
import Link from "next/link";
import {
  StyledContainer,
  StyledContainerMenuItems,
  StyledContainerTitle,
} from "./styles";
import SidebarMenuItem from "../SidebarMenuItem";
import ArrowFatLeftIcon from "@/icons/ArrowFatLeftIcon";
import useMainLayout from "../../hooks/useMainLayout";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const { menuItems, isMinimized, toggleSetIsMinimized } = useMainLayout();

  return (
    <StyledContainer isMinimized={isMinimized}>
      <StyledContainerTitle>
        <Link href="/">
          {isMinimized ? (
            <Image src={logoIcon} alt="LogoIcon" />
          ) : (
            <Image src={logo} alt="Logo" />
          )}
        </Link>
      </StyledContainerTitle>
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

      <SidebarMenuItem
        label={t("common:configurations.minimizeMenu")}
        icon={<ArrowFatLeftIcon />}
        isMinimized={isMinimized}
        onClick={toggleSetIsMinimized}
        sx={{ marginTop: "auto" }}
      />
    </StyledContainer>
  );
};

export default Sidebar;
