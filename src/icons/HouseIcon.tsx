"use client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';


type Props = SvgIconProps & { disabled?: boolean };

const House: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {})
        }}
    >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </SvgIcon>
);

export default House;