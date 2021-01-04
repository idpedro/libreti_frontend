import { createContext,ReactElement } from 'react';

export interface InterfaceTab{
  title:string
  tabRef:React.FC,
  setState:Function
  children:JSX.Element
}
export interface ITab{
  title:string,
  setState:(state:boolean)=>void
  content:JSX.Element
}


export interface InterfaceTabContext{
  addTab?:(ITab:ITab)=>void
}

type  TypeTabContext = InterfaceTabContext | null;


const TabContext = createContext<InterfaceTabContext>({})



export default TabContext;