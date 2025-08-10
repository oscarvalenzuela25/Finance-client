"use client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

type Props = SvgIconProps & { disabled?: boolean };

const SortIcon: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {}),
        }}
    >
        <path d="M3 18h6v-2H3zM3 6v2h18V6zm0 7h12v-2H3z"></path>
    </SvgIcon>
);

export default SortIcon;
