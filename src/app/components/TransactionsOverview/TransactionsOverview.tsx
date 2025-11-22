import React, { Fragment } from "react";
import {
  StyledBodyContainer,
  StyledContainerRoot,
  StyledTitleContainer,
  StyledTransactionsAmountContainer,
  StyledTransactionsDivider,
  StyledTransactionsPersonContainer,
  StyledTransactionsRow,
} from "./styles";
import { useTranslation } from "react-i18next";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EntityAvatar from "@/components/EntityAvatar/EntityAvatar";
import { transactionFormatAmount, formatDate } from "@/common/utils";
import { useGetTransactionsOverview } from "./infrastructure/useServices";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TransactionsOverview = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: transactions = [], isLoading: transactionsIsLoading } =
    useGetTransactionsOverview();

  return (
    <StyledContainerRoot>
      <StyledTitleContainer>
        <Typography variant="textPreset2Bold" color="grey900">
          {t("transactions:title")}
        </Typography>
        <Button
          variant="text"
          color="grey500"
          endIcon={<ArrowRightIcon fontSize="small" color="inherit" />}
          onClick={() => router.push("/transactions")}
        >
          {t("transactions:viewAll")}
        </Button>
      </StyledTitleContainer>
      <StyledBodyContainer>
        {transactionsIsLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="399px"
          >
            <CircularProgress size={50} color="primary" />
          </Box>
        ) : (
          <>
            {transactions?.map((transaction, index) => (
              <Fragment key={transaction.id}>
                <StyledTransactionsRow>
                  <StyledTransactionsPersonContainer>
                    <EntityAvatar
                      name={transaction.name}
                      type="service"
                      category={transaction?.category?.key}
                    />
                  </StyledTransactionsPersonContainer>

                  <StyledTransactionsAmountContainer>
                    {transactionFormatAmount(transaction.amount)}
                    <Typography variant="textPreset5" color="grey500">
                      {formatDate(new Date())}
                    </Typography>
                  </StyledTransactionsAmountContainer>
                </StyledTransactionsRow>
                {transactions?.length - 1 !== index && (
                  <StyledTransactionsDivider />
                )}
              </Fragment>
            ))}
          </>
        )}
      </StyledBodyContainer>
    </StyledContainerRoot>
  );
};

export default TransactionsOverview;
