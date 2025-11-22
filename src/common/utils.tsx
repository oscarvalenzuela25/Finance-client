import { Typography } from "@mui/material";
import { format } from "date-fns";

export const formatDate = (date: Date | string) => format(date, "dd MMM yyyy");

export const formatMoney = (amount: number) => {
  const number = Number(amount);
  if (isNaN(number)) return amount;
  const sign = number < 0 ? "-" : "";
  const value = Math.abs(number);
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${formatted}`;
};

export const transactionFormatAmount = (amount: number) => {
  const value = Math.abs(amount);
  const formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (amount < 0) {
    return (
      <Typography variant="textPreset4Bold" color="grey900">
        -${formatted}
      </Typography>
    );
  }
  return (
    <Typography variant="textPreset4Bold" color="green">
      +${formatted}
    </Typography>
  );
};
