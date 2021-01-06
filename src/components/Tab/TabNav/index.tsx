import React, { useState, useContext, useRef, useEffect } from 'react';
import { Button } from './styled';
import TabContext from '../TabContext';

interface ITabNav {
  children: JSX.Element;
  name:string
  title: string;
  active?: boolean;
}

const TabNav: React.FC<ITabNav> = ({ children, name,title, active }) => {
  const tabRef = useRef<HTMLButtonElement>(null);
  const { addTab, changeContent } = useContext(TabContext);
  const [state, setState] = useState(false);

  const click = () => {
    changeContent(title);
  };
  useEffect(() => {
    active && setState(active);
    addTab &&
      addTab({
        title,
        state,
        setState,
        content: children,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addTab, children, title, setState, active]);
  return (
    <Button active={state} onClick={click} ref={tabRef}>
      {name}
    </Button>
  );
};

export default TabNav;
