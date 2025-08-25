import { styled } from "@mui/material";

export const StyledContainerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.grey900.main,
  boxShadow: theme.shadows[1],
  borderBottom: `1px solid ${theme.palette.divider}`,
  padding: "0 40px",
  height: 74,
  [theme.breakpoints.down("mobile")]: {
    height: 52,
    padding: "0 16px",
  },
}));
