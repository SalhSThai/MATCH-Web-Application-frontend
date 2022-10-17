import React from 'react';
import styled from 'styled-components';
import { Button as ButtonAntd } from 'antd';
const Text = styled.p``;

const ButtonComp = styled(ButtonAntd)`
  background-color: ${({ color }) => {
    if (color) {
      return color;
    } else {
      return 'transparent';
    }
  }};
  display: flex;
  align-items: center;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '14px')};
`;

function Button({ text, type, shape, ...props }) {
  return (
    <ButtonComp type={type} shape={shape} color={color} {...props}>
      {text}
    </ButtonComp>
  );
}

export default Button;
