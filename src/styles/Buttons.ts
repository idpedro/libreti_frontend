import styled, { css } from 'styled-components';
import {NavLink} from 'react-router-dom';

interface ButtonInterface {
  background?: string;
  color?: string;
}

const ButtonPreset = css<ButtonInterface>`
  display: flex;
  align-items: center;
  background: ${(props) => (props.background ? props.background : 'var(--button-default)')};
  font-weight: bolder;
  font-size:.8em;
  padding: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;

  text-decoration:none;
  > span {
    color: ${(props) => (props.color ? props.color : '#fff')};
  }
  > svg {
    width: max(24px, 1.5rem);
    height: max(24px, 1.5rem);
    fill: ${(props) => (props.color ? props.color : '#fff')};
  }
  > svg + span {
    margin-left: 0.3rem;
  }
  & + & {
    margin-left: 1rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 1rem
      ${(props) => (props.background ? props.background : '#fff')};
  }
  &:active{
    outline:none;
    border:none;
  }
  @media(max-width:900px){
    font-size:.8rem;
    &>svg{
      width:1.3rem;
      height:1.3rem;
    }
  }
  @media(max-width:520px){
    width:3em;
    height:3em;
    &>span{display:none};
    &>svg{
      width:100%;
      height:100%;
    }
  }
`;

export const ButtonLink = styled(NavLink)<ButtonInterface>`
  ${ButtonPreset}
`;
export const Button = styled.button<ButtonInterface>`
  ${ButtonPreset}
`;
