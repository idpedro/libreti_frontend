import styled from 'styled-components';
import { Button } from '../../styles/Buttons';
export { Filter } from '../../styles/icons';

export const Container = styled.div`
  margin-top: 15vh;
  margin-bottom: 5vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0 5vw;
  width: 100%;
`;
export const SearchConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  border-radius: 0.3rem;
  overflow: hidden;
  color: var(--textButtons);
  > svg {
    width: 100%;
    margin: 0.3rem;
    max-width: 2rem;
    max-height: 2rem;
    fill: var(--gray);
    transition: 0.3s;
    fill: var(--textButtons);
  }
  &:hover > svg {
  }

  &:hover > input {
    border: 1px solid var(--primary);
  }
`;

export const SearchInput = styled.input`
  position: relative;
  font-size: 1em;
  padding: 0.25em;
  outline: none;
  color: var(--textButtons);
  width: min(400px, 100%);
  :active,
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--textButtons);
  }
 
`;

export const FilterButton = styled(Button)`
  background-color: var(--primary);
  color: var(--textButtons);
  > svg {
    fill: var(--textButtons);
  }
`;
