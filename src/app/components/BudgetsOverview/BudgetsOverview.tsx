import React from "react";
import { useGetBudgetsOverview } from "./infrastructure/useServices";
import {
  StyledBodyContainer,
  StyledCategoriesContainer,
  StyledChartContainer,
  StyledContainerRoot,
  StyledDetails,
  StyledDetailsColors,
  StyledDetailsTextContainer,
  StyledTitleContainer,
} from "./styles";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { PieChart, Pie, Cell } from "recharts";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const BudgetsOverview = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: budgets, isLoading: budgetsIsLoading } =
    useGetBudgetsOverview();

  const budgetData =
    budgets?.budgets?.map((budget) => ({
      name: budget.category.key,
      value: +budget.maximum,
    })) || [];

  const budgetsColors = budgets?.budgets?.map((budget) => budget.theme) || [];

  return (
    <StyledContainerRoot>
      <StyledTitleContainer>
        <Typography variant="textPreset2Bold" color="grey900">
          {t("budgets:title")}
        </Typography>
        <Button
          variant={"text"}
          color="grey500"
          onClick={() => router.push("/budgets")}
          endIcon={<ArrowRightIcon fontSize="small" color="inherit" />}
        >
          {t("budgets:viewAll")}
        </Button>
      </StyledTitleContainer>
      <StyledBodyContainer>
        {budgetsIsLoading ? (
          <CircularProgress size={38} color="primary" />
        ) : (
          <>
            <StyledChartContainer>
              <div style={{ width: 250, height: 250, position: "relative" }}>
                <PieChart width={250} height={250}>
                  <Pie
                    data={budgetData}
                    dataKey="value"
                    innerRadius={80}
                    outerRadius={120}
                    stroke="none"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell
                        key={`outer-${index}`}
                        fill={budgetsColors[index % budgetsColors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>

                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -55%)",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="textPreset1Bold" color="grey900">
                    {budgets?.current_amount}
                  </Typography>
                  <Typography variant="textPreset5" color="grey500">
                    {t("budgets:chartText", {
                      count: budgets?.limit_amount || 0,
                    })}
                  </Typography>
                </div>
              </div>
            </StyledChartContainer>
            <StyledCategoriesContainer>
              {budgets?.budgets?.map((budget) => (
                <StyledDetails key={budget.id}>
                  <StyledDetailsColors color={budget.theme} />
                  <StyledDetailsTextContainer>
                    <Typography variant="textPreset5" color="grey500">
                      {budget?.category?.key}
                    </Typography>
                    <Typography variant="textPreset4Bold" color="grey900">
                      ${budget?.transactions[0]?.amount}
                    </Typography>
                  </StyledDetailsTextContainer>
                </StyledDetails>
              ))}
            </StyledCategoriesContainer>
          </>
        )}
      </StyledBodyContainer>
    </StyledContainerRoot>
  );
};

export default BudgetsOverview;
