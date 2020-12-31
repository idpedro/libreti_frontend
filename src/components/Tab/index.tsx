import React, { useCallback,useState,useContext } from 'react';
import { TabHeader,Tab as TabButton } from './styles';
import TabContext from './TabContext';


const TabList: React.FC = ({children}) => {
  const  changeContent = useCallback(() => {
  },[])
  return (
    <TabContext.Provider value={{changeContent}}>
      <TabHeader>
          {children}
     </TabHeader>
    </TabContext.Provider>
  );
};

const Tab:React.FC =()=>{
    const { changeContent } = useContext(TabContext); 
    const [ state, setState] = useState("");
    const handlerClick =()=>{
      
    }
    return(
        <TabButton onClick={handlerClick}/>
    )
}



export { TabList ,Tab};
