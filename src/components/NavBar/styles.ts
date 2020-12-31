import styled from 'styled-components';
import { SupportAgent } from '../../styles/icons';
import {shade} from 'polished';

export const Container = styled.div`
  position:fixed;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items:center;
  padding:1em 5vw;
  width: 100%;
  background: ${props=>props.theme.colors.background_light};
  box-shadow: 0px 0px 0.3rem ${props=>(shade(.1,props.theme.colors.background_light))};
  z-index:3;
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
  box-shadow: 0px 0px 0.2rem var(--shadow);
  background: var(--shadow);
`;

export const SupportImage = styled(SupportAgent)`
  width: 100%;
  fill: var(--highlight);
`;
