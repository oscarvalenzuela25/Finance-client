import { InputLabel, styled } from "@mui/material";

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.grey900.light,

  "&.Mui-focused": {
    color: theme.palette.grey900.main,
  },

  // Error
  "&.Mui-error": {
    color: theme.palette.error.main,
  },
  "&.Mui-error.Mui-focused": {
    color: theme.palette.error.dark,
  },

  // Disabled
  "&.Mui-disabled": {
    color: theme.palette.beige100.dark,
  },
}));
