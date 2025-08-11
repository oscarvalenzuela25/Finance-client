"use client";
import React, { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps & { disabled?: boolean };

const CaretUpIcon: FC<Props> = ({ disabled, sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      ...(disabled ? { color: "disabled.main" } : {}),
    }}
  >
    <path d="m7 14 5-5 5 5z"></path>
  </SvgIcon>
);

export default CaretUpIcon;
