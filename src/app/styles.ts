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
  flexWrap: "wrap",
  gap: "24px",
  marginBottom: "32px",
});

export const BodyContainer = styled(Grid)({
  display: "flex",
  gap: "24px",
});

export const BodyLeftContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const BodyRightContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});
