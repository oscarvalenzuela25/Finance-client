"use client";
import React, { FC, PropsWithChildren } from "react";
import {
  MainContainer,
  RightContent,
} from "./styles";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";
import Topbar from "./components/Topbar";

type Props = PropsWithChildren;

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <Sidebar />
      <RightContent>
        <Topbar />
        {children}
        <SidebarMobile />
      </RightContent>
    </MainContainer>
  );
};

export default MainLayout;
