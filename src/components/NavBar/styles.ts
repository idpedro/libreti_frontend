import styled from 'styled-components';
import { SupportAgent } from '../../styles/icons';

export const Container = styled.div`
  position:fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items:center;
  padding:1em 5vw;
  width: 100%;
  background: var(--white);
  box-shadow: 0px 0px 0.3rem black;
  z-index:2;
  @media(min-width:520px){
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding:.3em;
  box-shadow: 0px 0px 0.2rem var(--primary);
  background: var(--primary);
  > svg {
    fill: var(--white);
  }
`;

export const SupportImage = styled(SupportAgent)`
  width: 100%;
  fill: var(--white);
`;
