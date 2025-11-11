"use client";
import {
  BodyContainer,
  BodyLeftContainer,
  BodyRightContainer,
  CardMoneyContainer,
  RootContainer,
  Title,
} from "./styles";

const OverviewPage = () => {
  return (
    <RootContainer>
      <Title variant="textPreset1Bold" color="grey900">
        Overview
      </Title>
      <CardMoneyContainer size={{ xs: 12 }}></CardMoneyContainer>
      <BodyContainer size={{ xs: 12 }}>
        <BodyLeftContainer size={{ xs: 12, md: 6 }}></BodyLeftContainer>
        <BodyRightContainer size={{ xs: 12, md: 6 }}></BodyRightContainer>
      </BodyContainer>
    </RootContainer>
  );
};

export default OverviewPage;
