"use client";
import React, { FC } from "react";
import { useFetchOverviewData } from "./infrastructure/useServices";
import { StyledCardContainer, StyledContainerRoot } from "./styles";
import { CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { formatMoney } from "@/common/utils";

const Overview: FC = () => {
  const { t } = useTranslation();
  const { data: overviewData, isLoading: overviewDataIsLoading } =
    useFetchOverviewData();

  const cards: { title: string; amount: number; type: "black" | "white" }[] = [
    {
      title: t("overview:currentBalance"),
      amount: overviewData?.current_balance || 0,
      type: "black",
    },
    {
      title: t("overview:income"),
      amount: overviewData?.income_balance || 0,
      type: "white",
    },
    {
      title: t("overview:expenses"),
      amount: overviewData?.expenses_balance || 0,
      type: "white",
    },
  ];

  return (
    <StyledContainerRoot>
      {cards.map((card) => (
        <StyledCardContainer key={card.title} type={card.type}>
          <Typography
            variant="textPreset4"
            color={card.type === "black" ? "white" : "grey500"}
          >
            {card.title}
          </Typography>
          {overviewDataIsLoading ? (
            <CircularProgress size={38} color="inherit" />
          ) : (
            <Typography
              variant="textPreset1Bold"
              color={card.type === "black" ? "white" : "grey900"}
            >
              ${formatMoney(card.amount)}
            </Typography>
          )}
        </StyledCardContainer>
      ))}
    </StyledContainerRoot>
  );
};

export default Overview;
