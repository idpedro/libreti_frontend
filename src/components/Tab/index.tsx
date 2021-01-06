import React, { useCallback, useState} from 'react';
import TabContext, { ITab, ITabNav } from './TabContext';
import { TabContent, TabNavBar } from './styles';
import TabNav from './TabNav';

export interface ITabProps{
  children:JSX.Element[]|JSX.Element,
  handlerContentCallback:(tab:any)=>void
}

const Tab: React.FC<ITabProps> = ({ children,handlerContentCallback }) => {
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [tabList, setTabList] = useState<ITab | null>(null);

  const addTab = useCallback((tab: ITabNav) => {
    setTabList((oldTabs: any) => {
      if (tab.state) {
        setContent(tab.content);
        handlerContentCallback(tab.title);
      }
      let tabs: any = { ...oldTabs };
      const title: any = tab?.title;
      tabs[title] = tab;
      return { ...tabs };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeContent = (title: string) => {
    if (tabList) {
      for (let key in tabList) {
        if (key === title) {
          tabList[key].setState(true);
          handlerContentCallback(key);
          setContent(tabList[key]?.content);
        } else tabList[key]?.setState(false);
      }
    }
  };
  return (
    <>
      <TabNavBar>
        <TabContext.Provider
          value={{ addTab, changeContent, content, setContent }}
        >
          {children}
        </TabContext.Provider>
      </TabNavBar>

      <TabContent>
        <div>{content}</div>
      </TabContent>
    </>
  );
};

export { TabNav, Tab };
