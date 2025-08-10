"use client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

type Props = SvgIconProps & { disabled?: boolean };

const CaretRightIcon: FC<Props> = ({ disabled, sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 24 24"
    sx={{
      ...sx,
      ...(disabled ? { color: 'disabled.main' } : {}),
    }}
  >
    <path d="m10 17 5-5-5-5z"></path>
  </SvgIcon>
);

export default CaretRightIcon;
