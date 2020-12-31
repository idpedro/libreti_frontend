import styled from 'styled-components';
import { Button } from '../../styles/Buttons';
export { Filter } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2em;
`;

export const Title = styled.h1`
  margin-left: 1rem;
  border-bottom: 1px solid black;
`;

export const ToolBar = styled.div`
  margin-top: 15vh;
  margin-bottom: 5vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 5vw;
  width: 100%;
`;

export const FilterButton = styled(Button)`
  background-color: var(--primary);
  color: var(--textButtons);
  > svg {
    fill: var(--textButtons);
  }
`;
