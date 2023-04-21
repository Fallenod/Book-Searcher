import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div((props) => `
    width: ${props.width && '100px'};
    height: ${props.height && '100px'};
    user-select: none;
    ${props.pointer ? 'cursor: pointer;' : 'cursor: auto;'}
`);

function PicBlock({ width, height, pointer, src }) {
    return (
        <Wrapper width={width} height={height} pointer>
            <img alt='logo' src={src} />
        </Wrapper>
    )
};

export default PicBlock;