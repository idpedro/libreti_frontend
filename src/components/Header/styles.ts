import styled, { keyframes } from 'styled-components';
import { SupportAgent } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 5vw;
  width: 100%;
  height: min(10vh, 76px);
  background: var(--white);
  box-shadow: 0px 0px 0.3rem black;
`;

const AnimationRotate = keyframes`
  50%{transform:rotate(-15deg)}
  100%{transform:rotate(15deg)}
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  border: 0.4srem solid var(--gray);
  height: min(15vw, 100px);
  width: min(15vw, 100px);
  min-height: 75px;
  min-width: 75px;
  position: relative;
  left: 12px;
  top: 12px;
  box-shadow: inset 0px 0px 0.2rem black;
  background: var(--gray);

  & > :hover {
    animation: ${AnimationRotate} 1s alternate infinite ease-out;
  }
`;

export const SupportImage = styled(SupportAgent)`
  width: 80%;
  fill: var(--white);
`;
