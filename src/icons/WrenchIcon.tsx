"user client"
import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

type Props = SvgIconProps & { disabled?: boolean };

const WrenchIcon: FC<Props> = ({ disabled, sx, ...props }) => (
    <SvgIcon
        {...props}
        viewBox="0 0 24 24"
        sx={{
            ...sx,
            ...(disabled ? { color: 'disabled.main' } : {}),
        }}
    >
        <path d="m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"></path>
    </SvgIcon>
);

export default WrenchIcon;