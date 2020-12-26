import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Search from '../Search';

const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Search />
      </Container>
    </>
  );
};

export default Layout;
