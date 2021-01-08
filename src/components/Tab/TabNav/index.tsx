import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import { Button } from './styled';
import TabContext from '../TabContext';

interface ITabNav {
  children: JSX.Element[] | JSX.Element;
  name: string;
  title: string;
  active?: boolean;
}

export interface TabHandler {
  getConter: () => JSX.Element;
}

const TabNav: React.FC<ITabNav> = ({ children, name, title, active }) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const { addTab, changeContent } = useContext(TabContext);
  const [state, setState] = useState(active ? active : false);

  const click = () => {
    changeContent(title, children);
  };
  const toggleState = useCallback((state: boolean) => {
    setState(state);
  }, []);

  const registreTab = useCallback(() => {
    addTab({
      title,
      state,
      setState:toggleState,
      content:children,
    });
  }, [addTab, children, state, title, toggleState]);

  useEffect(() => {
    registreTab();
  }, [registreTab]);
  return (
    <>
      <Button active={state} onClick={click} ref={tabRef}>
        {name}
      </Button>
    </>
  );
};

export default TabNav;
