import styled from 'styled-components';

export const ButtonList = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 100%;
  width: min(60vw, 500px);
  justify-content: space-between;
  align-items: center;
`;

interface MenuLinkProps {
  background?: string;
  color?: string;
}

export const ButtonPreset = styled.a<MenuLinkProps>`
  display: flex;
  align-items: center;
  background: ${(props) => (props.background ? props.background : '#fff')};
  font-weight: bolder;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  text-align: center;
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
`;
