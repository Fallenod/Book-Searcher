import React from 'react';
import dotgrid from '../content/dotgrid.svg'
import PicBlock from './PicBlock';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  top: 4.5rem;
  right: 0;
`;
const Block = styled.div((props) => `
    width: ${props.width && '80px'};
    height: ${props.height && '80px'};
    margin-bottom: -60px;
    margin-left: -30px;
    background: rgba(250, 250, 250, 0.5);
    border-radius: 20px;
`);
function DotgridBlock() {
    return (
        <Wrapper>
            <Block width="80px" height="80px" />
            <PicBlock width="100px" height="100px" src={dotgrid} />
        </Wrapper>
    )
};

export default DotgridBlock;