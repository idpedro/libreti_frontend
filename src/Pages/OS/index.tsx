import React, { useState, useEffect, ReactNode, useCallback } from 'react';
import Api from '../../Api';
import Search from '../../components/Search';
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

  const [showOS, setShowOS] = useState<'open' | 'assumed'>('open');

  const getOsOpen = useCallback(async () => {
    const { data } = await Api.get('os/get/status/open');
    setOsOpen(data);
  }, []);

  const getOsAssumed = useCallback(async () => {
    const { data } = await Api.get('os/get/status/assumed');
    setOsAssumed(data);
  }, []);

  useEffect(() => {
    getOsOpen();
    getOsAssumed();
  }, [getOsOpen, getOsAssumed]);

  const sortOsList = (sortBy: 'prioridade' | 'id' | 'nome') => {
    if (showOS === 'open') setOsOpen([...osOpen].sort(Sort[sortBy]));
    else setOsAssumed([...osAssumed].sort(Sort[sortBy]));
  };

  return (
    <>
      <NavBar />
      <ToolBar>
        <Search />
        <Filter filterCallback={sortOsList} options={SortOptions} />
      </ToolBar>
      <Tab handlerContentCallback={setShowOS}>
        <TabNav active={true} name="Abertas" title="open">
          <OsListOpen osList={osOpen} />
        </TabNav>
        <TabNav name="Assumidas" title="assumed">
          <OsListOpen osList={osAssumed} />
        </TabNav>
      </Tab>
    </>
  );
};

export default Os;
