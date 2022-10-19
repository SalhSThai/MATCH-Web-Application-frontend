import styled from 'styled-components';

const DivContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  /* transform: translateY(-50%); */

  /* justify-content: space-between; */
  width: 428px;
  height: 100vh;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
`;

export default function ContainerComponent({ children }) {
  return <DivContainer>{children}</DivContainer>;
}
