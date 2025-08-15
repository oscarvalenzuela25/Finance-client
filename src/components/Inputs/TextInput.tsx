import InputAdornment from "@mui/material/InputAdornment";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { FC } from "react";

export const BasicTextInput: FC<TextFieldProps> = ({
  label,
  placeholder,
  error,
  helperText,
  ...props
}) => {
  return (
    <TextField
      id="basicTextInput"
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      {...props}
    />
  );
};

export const SearchTextInput: FC<TextFieldProps> = ({
  label,
  placeholder,
  error,
  helperText,
  ...props
}) => {
  return (
    <TextField
      id="searchTextInput"
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export const MoneyTextInput: FC<TextFieldProps> = ({
  label,
  placeholder,
  error,
  helperText,
  ...props
}) => {
  return (
    <TextField
      id="moneyTextInput"
      label={label}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};
