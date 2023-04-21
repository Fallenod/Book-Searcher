import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

function FilterGroup({ data, defaultValue, reducer }) {
    const dispatch = useDispatch();
    const { title, list } = data;
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{title}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={defaultValue}
                name="radio-buttons-group"
            >
                {
                    list.map((item, index) => (
                        <FormControlLabel onClick={(e) => dispatch(reducer(e.target.value))} value={item.value} control={<Radio />} label={item.name} />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
};

export default FilterGroup;