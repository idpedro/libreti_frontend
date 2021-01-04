import styled from 'styled-components';
import { Button } from '../../styles/Buttons';
export { Filter as FilterIcon } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  background-color: var(--primary);
  flex:2;
  max-width:300px;
`;

export const FilterButton = styled(Button)`
  background-color: var(--primary);
  color: var(--textButtons);
  > svg {
    fill: var(--textButtons);
  }
  border-radius:unset !important;

`;

export const Select = styled.select`
  background: var(--primary);
  color: var(--textButtons);
  flex:2;
  max-width:300px;
  text-align:right;
  text-transform:capitalize;

  :active,:hover,:focus{
      outline:none;
  }
  >option{
      text-align:right;
      text-transform:capitalize;
  }
`;
