"use client";
import React, { FC, PropsWithChildren } from "react";
import {
  MainContainer,
  RightContent,
  //   TopbarDummy,
} from "./styles";
import Sidebar from "./components/Sidebar";
import SidebarMobile from "./components/SidebarMobile";

type Props = PropsWithChildren;

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <Sidebar />
      <RightContent>
        {/* <TopbarDummy /> */}
        {children}
        <SidebarMobile />
      </RightContent>
    </MainContainer>
  );
};

export default MainLayout;
