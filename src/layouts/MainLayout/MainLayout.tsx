"use client";
import React, { FC, PropsWithChildren } from "react";
import {
  MainContainer,
  RightContent,
  SidebarDummy,
  SidebarMobileDummy,
  TopbarDummy,
} from "./styles";

type Props = PropsWithChildren;

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <MainContainer>
      <SidebarDummy />
      <RightContent>
        <TopbarDummy />
        {children}
        <SidebarMobileDummy />
      </RightContent>
    </MainContainer>
  );
};

export default MainLayout;
