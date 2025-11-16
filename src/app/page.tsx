"use client";
import { useTranslation } from "react-i18next";
import Overview from "./components/Overview";
import {
  BodyContainer,
  BodyLeftContainer,
  BodyRightContainer,
  CardMoneyContainer,
  RootContainer,
  Title,
} from "./styles";

const OverviewPage = () => {
  const { t } = useTranslation();
  return (
    <RootContainer>
      <Title variant="textPreset1Bold" color="grey900">
        {t("overview:overview")}
      </Title>
      <CardMoneyContainer size={{ xs: 12 }}>
        <Overview />
      </CardMoneyContainer>
      <BodyContainer size={{ xs: 12 }}>
        <BodyLeftContainer size={{ xs: 12, md: 6 }}></BodyLeftContainer>
        <BodyRightContainer size={{ xs: 12, md: 6 }}></BodyRightContainer>
      </BodyContainer>
    </RootContainer>
  );
};

export default OverviewPage;
