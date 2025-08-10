"use client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';


type Props = SvgIconProps & ({ disabled?: boolean });

const CheckCircle: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {}),
        }}
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
    </SvgIcon>
);

export default CheckCircle;