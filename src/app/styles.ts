import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const RootContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "32px 40px",
  [theme.breakpoints.down("mobile")]: {
    padding: "24px 16px",
  },
}));

export const Title = styled(Typography)({
  marginBottom: "42px",
});

export const CardMoneyContainer = styled(Grid)({
  display: "flex",
  marginBottom: "32px",
});

export const BodyContainer = styled(Grid)({
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
});

export const BodyLeftContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  [theme.breakpoints.up("laptop")]: {
    width: "calc(58.49% - 12px)",
  },
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
  },
}));

export const BodyRightContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  [theme.breakpoints.up("laptop")]: {
    width: "calc(41.51% - 12px)",
  },
  [theme.breakpoints.down("laptop")]: {
    width: "100%",
  },
}));
