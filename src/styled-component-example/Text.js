import React from 'react';
import styled, { css } from 'styled-components';

const TextCustom = styled.div`
  ${({ h1, h3, h2, body }) => {
    if (h1) {
      return css`
        font-size: 32px;
      `;
    }
  }}
`;

function Text({ h1, h3, h2, body, children }) {
  return <TextCustom h1={h1}>{children}</TextCustom>;
}

export default Text;
