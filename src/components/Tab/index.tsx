import React, { useCallback, useState, useEffect } from 'react';
import TabContext, { ITabNav } from './TabContext';
import { TabContent, TabNavBar } from './styles';
import TabNav from './TabNav';

export interface ITabProps {
  children: JSX.Element[] | JSX.Element;
  handlerContentCallback?: (tab: any) => void;
}

interface TabList {
  [title: string]: {
    state: boolean;
    setState: (state: boolean) => void;
    content: Element[] | Element;
  };
}

const Tab: React.FC<ITabProps> = ({ children, handlerContentCallback }) => {
  const [showTab, setShowTab] = useState<string>();
  const [tabList, setTabList] = useState<TabList>({});

  const addTab = (tab: ITabNav) => {
    setTabList((oldTabList) => {
      if (Object.keys(oldTabList).length === 0 || tab.title === showTab) {
        setShowTab(tab.title);
      }
      oldTabList[tab.title] = {
        state: tab.state,
        setState: tab.setState,
        content: tab.content,
      };

      return oldTabList;
    });
  };

  useEffect(() => {
    console.log('change render TABMain');
  }, []);
  const changeContent = useCallback(
    (title: string) => {
      if (Object.keys(tabList).length > 0) {
        for (let key in tabList) {
          if (key === title) {
            tabList[key].setState(true);
            handlerContentCallback && handlerContentCallback(key);
            setShowTab(key);
          } else tabList[key].setState(false);
        }
      }
    },
    [handlerContentCallback, tabList]
  );

  useEffect(() => {
    console.log(tabList);
  }, [tabList]);
  return (
    <>
      <TabNavBar>
        <TabContext.Provider value={{ addTab, changeContent }}>
          {children}
        </TabContext.Provider>
      </TabNavBar>

      <TabContent>
        <div>{showTab && tabList[showTab].content}</div>
      </TabContent>
    </>
  );
};

export { TabNav, Tab };
