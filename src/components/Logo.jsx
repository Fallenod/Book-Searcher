import React from 'react';
import logo from '../content/logo.png'
import PicBlock from './PicBlock';
import { css } from '@emotion/react';




function Logo({ width, height }) {
    return (
        <PicBlock width={width} height={height} pointer src={logo} />
    )
};

export default Logo;