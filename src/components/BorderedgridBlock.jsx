import React from 'react';
import dotgrid from '../content/dotgrid.svg'
import PicBlock from './PicBlock';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 0rem;
  right: 0;
`;
const Block = styled.div((props) => `
    width: ${props.width && '80px'};
    height: ${props.height && '80px'};
    margin-top: 40px;
    margin-right: -40px;
    background: #14213D;
    border-radius: 20px;
`);
const BlockBordered = styled.div((props) => `
    width: 200px;
    height: 150px;
    border-top: 1px solid #14213D;
    border-left: 1px solid #14213D;
    border-radius: 20px 0px 20px 0px;
    background-color: transparent;
`);
function BorderedgridBlock() {
    return (
        <Wrapper>
            <Block width="80px" height="80px" />
            <BlockBordered />
        </Wrapper>
    )
};

export default BorderedgridBlock;