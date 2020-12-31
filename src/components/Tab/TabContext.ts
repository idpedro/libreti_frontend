import { createContext } from 'react';

interface ITabContext {
  createContext?: (any:any)=>void;
}

const TabContext = createContext<ITabContext>({});



export default TabContext;