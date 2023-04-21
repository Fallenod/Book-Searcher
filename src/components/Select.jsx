import styled from '@emotion/styled';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import useOutClick from '../hooks/useOutClick';
const SelectBlock = styled.div(({ theme }) => ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "2.5rem",
    width: "14rem",
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: theme.shape.borderRadius,
    cursor: "pointer",
    zIndex: 2,
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));
const SelectInner = styled.div(({ theme }) => ({
    position: "absolute",
    top: "3.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "2.5rem",
    width: "100%",
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    boxShadow: "0 2px 10px 0 rgba(0,0,0,.12)",
    cursor: "pointer",
    '&:hover': {
        borderColor: theme.palette.primary.main,
    },
}));
const Item = styled.div({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    width: "100%",
});
const ItemInner = styled(Item)(({ theme }) => ({
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    }
}));
const Text = styled(Typography)({
    fontWeight: 700,
});
function Select({ list, reducer, selector }) {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const rootEl = useRef(null);
    const handleSelect = useCallback(() => {
        setVisible(!visible);
    }, [visible]);
    useOutClick(rootEl, handleSelect, visible);
    return (
        <SelectBlock ref={rootEl} onClick={handleSelect}>
            <Item><Text>{list.find(item => item.value === selector).name}</Text><FontAwesomeIcon icon={faAngleDown} /></Item>
            {visible && <SelectInner>
                {list.map((item) => (
                    <ItemInner key={item.id} onClick={(e) => dispatch(reducer(e.currentTarget.dataset.value))} data-value={item.value}><Text>{item.name}</Text></ItemInner>
                ))}
            </SelectInner>}

        </SelectBlock>
    );
}

export default Select;
