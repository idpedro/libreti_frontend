import styled from 'styled-components';
import { shade } from 'polished';


interface ITab {
  active?: boolean;
}

export const TabHeader = styled.div`
  display: flex;
`;

export const TabNav = styled.div`
  display: flex;
`;

export const Tab = styled.button<ITab>`
  background: ${(props) =>
    props.active
      ? `var(--primary)`
      : `${shade(0.5, props.theme.colors.primary)}`};
  padding: 0.3em;
  font-size: 1.3rem;
  margin-left: 0.4rem;
  border-radius: 0.3rem 0.3rem 0em 0em;
  color: var(--text);
`;
