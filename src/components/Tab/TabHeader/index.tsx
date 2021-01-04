import React from 'react';

import { Container } from './styles';

const TabHeader: React.FC = ({children}) => {
  return(
    <Container>
        {children}
    </Container>
  )
}

export default TabHeader;