import React from 'react';
import styled from 'styled-components';
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 100px;
  height: 50px;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius : 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

`;
const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}></StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
