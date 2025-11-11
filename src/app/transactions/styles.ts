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
