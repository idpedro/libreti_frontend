import styled from 'styled-components';
import Toggle from '../../components/Toggle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThemesContent = styled.div`
  display: flex;
`;

export const ThemeButton = styled.button`
  color: ${(props) => props.theme.colors.text};
`;

export const Label = styled.label``;

export const InputWrapper = styled.div``;

export { Toggle };
