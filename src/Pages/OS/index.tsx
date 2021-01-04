import React, { useState, useEffect, ReactNode } from 'react';
import Search from './Search';
import NavBar from '../../components/NavBar';
import {
  Container,
  Title,
  ToolBar,
  FilterButton,
  Filter,
} from './styles';

import { Tab,TabNav} from '../../components/Tab';

import OSCard, { OSCardInterface } from './OsCard';
import { sortByPriority} from '../../Handlers/OS';

interface IOsListOpen {
  children?: ReactNode;
  osList: OSCardInterface[];
}

const OsListOpen: React.FC<IOsListOpen> = ({
  children,
  osList,
}: IOsListOpen) => {
  return (
    <>
      <Title>Em Aberto</Title>
      <Container>
        {osList?.map((os: OSCardInterface) => {
          return <OSCard key={os.id} {...os} />;
        })}
      </Container>
    </>
  );
};

const Os: React.FC = () => {
  const [osOpen, setOsOpen] = useState<OSCardInterface[]>([]);
  const [osAssumed, setOsAssumed] = useState<OSCardInterface[]>([]);
  const [displayedOSList, setDisplayedOSList] = useState<OSCardInterface[]>([]);
  const [showOS, setShowOS] = useState('open');

  const toggleShowOS = (osListName: string) => {
    if (osListName === 'open') setShowOS('open');
    if (osListName === 'assumed') setShowOS('assumed');
  };

  useEffect(() => {
    if (showOS === 'open') setDisplayedOSList(osOpen);
    if (showOS === 'assumed') setDisplayedOSList(osAssumed);
  }, [showOS]);

  useEffect(() => {
    const getOsList = async () => {
      const response = await fetch(
        'http://localhost:3333/os/get/status/assumed'
      );
      const data = await response.json();
      setOsAssumed(data);
    };
    getOsList();
  }, []);

  useEffect(() => {
    const getOsList = async () => {
      const response = await fetch('http://localhost:3333/os/get/status/open');
      const data = await response.json();
      setOsOpen(data);
      setDisplayedOSList(data);
    };
    getOsList();
  }, []);

  const sortOsList = () => {
    if (displayedOSList)
      setDisplayedOSList([...displayedOSList].sort(sortByPriority));
  };
  return (
    <>
      <NavBar />
      <Search />
      <ToolBar>
        <Search />
        <FilterButton onClick={sortOsList}>
          <Filter />
          <span>{'Filtrar'}</span>
        </FilterButton>
      </ToolBar>
      <Tab>
        <TabNav title="Abertas" >
          {/* <OsListOpen osList={osOpen as OSCardInterface[]} /> */}
          <h1>os</h1>
        </TabNav>
        <TabNav title="Assumidas">
          {/* <OsListOpen osList={osAssumed as OSCardInterface[]} /> */}
          <h1>os2</h1>
        </TabNav>
      </Tab>
      
    </>
  );
};

export default Os;
