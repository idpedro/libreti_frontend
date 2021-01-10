import styled from 'styled-components';
import { shade } from 'polished';

export const Label = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 34px;

  :hover > span,
  :hover > span::before {
    box-shadow: 0 0 0.25em inherit;
  }
  > input {
    opacity: 0;
    width: 0;
    height: 0;
    :checked + span::before {
      background-color: var(--text);
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    :checked + span {
      background: var(--primary);
    }
  }
  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 3.75em;
    height: 2.125em;
    background-color: ${(props) => shade(0.5, props.theme.colors.primary)};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 2.125em;

    ::before {
      position: absolute;
      content: '';
      height: 1.625em;
      width: 1.625em;
      left: 0.25em;
      bottom: 0.25em;
      border-radius: 50%;
      background-color: ${(props) => shade(0.5, props.theme.colors.text)};
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
`;
