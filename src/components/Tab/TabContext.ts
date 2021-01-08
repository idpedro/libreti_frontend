import { createContext, Dispatch } from 'react';

export interface InterfaceTab {
  title: string;
  tabRef: React.FC;
  setState: Function;
  children: JSX.Element;
}
export interface ITab {
  [title: string]: {
    setState: (state: boolean) => void;
    state: boolean;
    content: JSX.Element | null;
  };
}

export interface ITabNav {
  title: string;
  state: boolean;
  setState: Dispatch<any>;
  content: Element | Element[];
}

export interface InterfaceTabContext {
  addTab?:any,
  changeContent?:any
  content?:any,
  setContent?:any 
}


const TabContext = createContext<InterfaceTabContext>({});

export default TabContext;
