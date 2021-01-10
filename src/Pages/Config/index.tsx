import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { APPContext, ThemeToggle } from '../../App';
import NavBar from '../../components/NavBar';
import { Container, Label, InputWrapper } from './styles';

import Select from '../../components/Select';

const Config: React.FC = () => {
  const { themes, usedTheme, toggleTheme } = useContext(APPContext);

  const selectedTheme = useRef<HTMLSelectElement>(null);

  const changeTheme = useCallback(() => {
    toggleTheme(selectedTheme.current?.value as ThemeToggle);
  }, [toggleTheme]);

  return (
    <>
      <NavBar />
      <Container>
        <form action="">
          <InputWrapper>
            <label htmlFor="">nome</label>
            <input type="text" />
          </InputWrapper>
        </form>
        <h4>Configurações de Interface</h4>
        <Container>
          <Label>
            Tema
            <Select
              optionlist={themes}
              selectedOption={usedTheme}
              ref={selectedTheme}
              onChange={changeTheme}
            />
          </Label>
        </Container>
      </Container>
    </>
  );
};

export default Config;
