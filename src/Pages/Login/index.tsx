import React, { useRef, useEffect } from 'react';
import Toggle from '../../components/Toggle';
import { Container } from './styles';

const Login: React.FC = () => {
  const keepLogin = useRef<HTMLInputElement>(null);
  useEffect(() => {
    console.log(keepLogin.current?.checked);
  }, []);
  return (
    <Container>
      <Toggle ref={keepLogin} checked />
    </Container>
  );
};

export default Login;
