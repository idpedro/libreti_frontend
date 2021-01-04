import React, { useState, useEffect, ReactNode } from 'react';
import Search from './Search';
import NavBar from '../../components/NavBar';
import { Container, ToolBar } from './styles';
import Filter from '../../components/Filter';

import { Tab, TabNav } from '../../components/Tab';

import OSCard, { OSCardInterface } from './OsCard';
import { Sort, SortOptions } from '../../Handlers/OS';

interface IOsListOpen {
  children?: ReactNode;
  osList: OSCardInterface[];
}

const OsListOpen: React.FC<IOsListOpen> = ({ osList }: IOsListOpen) => {
  return (
    <>
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

  const [showOS, setShowOS] = useState('Abertas');

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
    };
    getOsList();
  }, []);

  const sortOsList = (sortBy: 'prioridade' | 'id' | 'nome') => {
    console.log(sortBy);
    if (showOS) {
      if (showOS === 'Abertas') setOsOpen([...osOpen].sort(Sort[sortBy]));
      if (showOS === 'Assumidas')
        setOsAssumed([...osAssumed].sort(Sort[sortBy]));
    }
  };
  return (
    <>
      <NavBar />
      <Search />
      <ToolBar>
        <Search />
        <Filter filterCallback={sortOsList} options={SortOptions} />
      </ToolBar>
      <Tab handlerContentCallback={setShowOS}>
        <TabNav active={true} title="Abertas">
          <OsListOpen osList={osOpen as OSCardInterface[]} />
        </TabNav>
        <TabNav title="Assumidas">
          <OsListOpen osList={osAssumed as OSCardInterface[]} />
        </TabNav>
      </Tab>
    </>
  );
};

export default Os;
