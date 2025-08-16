import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { type SelectProps } from "@mui/material";
import React, { ChangeEvent, FC, ReactNode } from "react";
import { StyledInputLabel } from "./styles";

type Props = {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<{ value: unknown }>) => void;
  options: { value: string; content: ReactNode }[];
} & SelectProps;

const SelectInput: FC<Props> = ({
  label,
  value,
  onChange,
  options = [],
  ...selectProps
}) => {
  return (
    <FormControl fullWidth>
      <StyledInputLabel id="select-label">{label}</StyledInputLabel>
      <Select
        labelId="select-label"
        id="select-label"
        value={value}
        label={label}
        onChange={onChange}
        variant="outlined"
        {...selectProps}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.content}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
