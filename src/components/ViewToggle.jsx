import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faListUl } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const ToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    display: "flex",
    gap: ".2rem",
    '& .MuiToggleButtonGroup-grouped': {
        border: 0,
        '&:hover': {
            backgroundColor: "transparent",
        },
        '&.Mui-disabled': {
            border: 0,
        },
        '&.Mui-selected': {
            border: `1px solid ${theme.palette.primary.main}`,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

function ViewToggle({ value, onChange }) {
    return (
        <ToggleGroup
            value={value}
            exclusive
            onChange={onChange}
            color='primary'
        >
            <ToggleButton value="list" aria-label="list">
                <FontAwesomeIcon icon={faListUl} />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <FontAwesomeIcon icon={faGrip} />
            </ToggleButton>
        </ToggleGroup>
    )
};

export default ViewToggle;