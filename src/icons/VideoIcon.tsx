"user client";
import React, { FC } from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

type Props = SvgIconProps & { disabled?: boolean };

const VideoIcon: FC<Props> = ({ disabled, sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      ...(disabled ? { color: "disabled.main" } : {}),
    }}
  >
    <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-6-7 4V7z"></path>
  </SvgIcon>
);

export default VideoIcon;
