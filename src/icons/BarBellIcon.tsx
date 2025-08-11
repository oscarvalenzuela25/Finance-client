"user client";
import React, { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps & { disabled?: boolean };

const BarBellIcon: FC<Props> = ({ disabled, sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      ...(disabled ? { color: "disabled.main" } : {}),
    }}
  >
    <path d="M2 17h20v2H2zm11.84-9.21c.1-.24.16-.51.16-.79 0-1.1-.9-2-2-2s-2 .9-2 2c0 .28.06.55.16.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21"></path>
  </SvgIcon>
);

export default BarBellIcon;
