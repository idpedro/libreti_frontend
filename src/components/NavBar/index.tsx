import React from 'react';
import { Container, Logo, SupportImage } from './styles';
import Menu  from './Menu';

const NavBar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          <SupportImage />
        </Logo>
        <Menu />
      </Container>
    </>
  );
};

export default NavBar;
