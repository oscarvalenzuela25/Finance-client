import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
  padding: "16px",
});

export const StyledButtonPrimary = styled(StyledButton)(({ theme }) => ({
  ...theme.typography.textPreset4Bold,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.grey500.main,
  },
}));

export const StyledButtonSecondary = styled(StyledButton)(({ theme }) => ({
  ...theme.typography.textPreset4Bold,
  color: theme.palette.grey900.main,
  border: `1px solid ${theme.palette.beige100.main}`,
  "&:hover": {
    border: `1px solid ${theme.palette.beige500.main}`,
    backgroundColor: theme.palette.common.white,
  },
}));

export const StyledButtonTertiary = styled(StyledButton)(({ theme }) => ({
  ...theme.typography.textPreset4,
  color: theme.palette.grey500.main,
  "&:hover": {
    color: theme.palette.grey900.main,
  },
}));

export const StyledButtonDestroy = styled(StyledButton)(({ theme }) => ({
  ...theme.typography.textPreset4Bold,
  color: theme.palette.common.white,
  "&:hover": {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.red.light,
  },
}));
