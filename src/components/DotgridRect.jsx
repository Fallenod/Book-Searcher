import React from 'react';
import dotgridRect from '../content/dotgridRect.svg'
import PicBlock from './PicBlock';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  bottom: 4.5rem;
  left: -40px;
`;

function DotgridRect() {
    return (
        <Wrapper>
            <PicBlock width="80px" height="80px" src={dotgridRect} />
        </Wrapper>

    )
};

export default DotgridRect;