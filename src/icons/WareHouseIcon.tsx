"use client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

type Props = SvgIconProps & { disabled?: boolean };

const WareHouse: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {}),
        }}
    >
        <path d="M22 21V7L12 3 2 7v14h5v-9h10v9zm-11-2H9v2h2zm2-3h-2v2h2zm2 3h-2v2h2z"></path>
    </SvgIcon>
);

export default WareHouse;