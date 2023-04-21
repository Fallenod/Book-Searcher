import React from 'react';

import { Badge } from '@mui/material';

function BadgeWrapper({ badgeContent, color, ico }) {
    return (
        <Badge badgeContent={badgeContent} color={color}>
            {ico}
        </Badge>
    );
}

export default BadgeWrapper;
