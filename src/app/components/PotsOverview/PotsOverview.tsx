import React from "react";
import {
  StyledBodyContainer,
  StyledContainerRoot,
  StyledDetails,
  StyledDetailsColors,
  StyledDetailsContainer,
  StyledDetailsTextContainer,
  StyledSummaryContainer,
  StyledSummaryTitleContainer,
  StyledTitleContainer,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Button, CircularProgress, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRouter } from "next/navigation";
import PotsOverviewImg from "../../../assets/imgs/PotsOverview.svg";
import Image from "next/image";
import { useGetOverviewPots } from "./infrastructure/useServices";

const PotsOverview = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: pots, isLoading: potsIsLoading } = useGetOverviewPots();

  return (
    <StyledContainerRoot>
      <StyledTitleContainer>
        <Typography variant="textPreset2Bold" color="grey900">
          {t("pots:title")}
        </Typography>
        <Button
          variant="text"
          color="grey500"
          endIcon={<ArrowRightIcon fontSize="small" color="inherit" />}
          onClick={() => router.push("/pots")}
        >
          {t("pots:seeDetails")}
        </Button>
      </StyledTitleContainer>

      <StyledBodyContainer>
        <StyledSummaryContainer>
          <Image
            src={PotsOverviewImg}
            alt="pots overview"
            width={40}
            height={40}
          />
          <StyledSummaryTitleContainer>
            <Typography variant="textPreset4" color="grey500">
              {t("pots:totalSaved")}
            </Typography>
            <Typography variant="textPreset1Bold" color="grey900">
              {potsIsLoading ? (
                <CircularProgress size={38} color="inherit" />
              ) : (
                <>${pots?.total_saved || 0}</>
              )}
            </Typography>
          </StyledSummaryTitleContainer>
        </StyledSummaryContainer>
        <StyledDetailsContainer>
          {pots?.pots?.map((pot) => (
            <StyledDetails key={pot.id}>
              <StyledDetailsColors color={pot.theme} />
              <StyledDetailsTextContainer>
                <Typography variant="textPreset5" color="grey500">
                  {pot.name}
                </Typography>
                <Typography variant="textPreset4Bold" color="grey900">
                  ${pot.current_value}
                </Typography>
              </StyledDetailsTextContainer>
            </StyledDetails>
          ))}
        </StyledDetailsContainer>
      </StyledBodyContainer>
    </StyledContainerRoot>
  );
};

export default PotsOverview;
