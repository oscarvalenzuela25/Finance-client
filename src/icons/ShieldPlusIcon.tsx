"use client";
import React, { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps & { disabled?: boolean };

const ShieldPlusIcon: FC<Props> = ({ disabled, sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      ...(disabled ? { color: "disabled.main" } : {}),
    }}
  >
    <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5z"></path>
  </SvgIcon>
);

export default ShieldPlusIcon;
