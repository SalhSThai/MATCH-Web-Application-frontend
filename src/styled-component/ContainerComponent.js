import styled from 'styled-components';
import AlertMatchContainer from '../features/Match/AlertMatchContainer';

const DivContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* top: 50%; */
  left: 50%;
  transform: translateX(-50%);
  /* transform: translateY(-50%); */

  /* justify-content: space-between; */
  width: 390px;
  height: 100vh;
  overflow: hidden;
  /* padding-left: 10px;
  padding-right: 10px; */

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  /* If the screen size is 601px or more, set the font-size of <div> to 80px */
  @media (min-width: 601px) {
  }
`;

export default function ContainerComponent({ children }) {
  return <DivContainer>
    {children}
    <AlertMatchContainer />
  </DivContainer>;
}
