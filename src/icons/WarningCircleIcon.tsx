"user client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

type Props = SvgIconProps & { disabled?: boolean };

const WarningCircleIcon: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {}),
        }}
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"></path>
    </SvgIcon>
);

export default WarningCircleIcon;