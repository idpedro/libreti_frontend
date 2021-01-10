import styled from 'styled-components';

export const SelectStyled = styled.select`
  background: var(--primary);
  color: var(--textButtons);
  flex: 2;
  max-width: 300px;
  text-align: right;
  text-transform: capitalize;

  :active,
  :hover,
  :focus {
    outline: none;
  }
  > option {
    text-align: right;
    text-transform: capitalize;
  }
`;
