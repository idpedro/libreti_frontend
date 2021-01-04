import React, { useCallback,useState } from 'react';
import TabContext ,{ITab} from './TabContext';
import { TabContent } from './styles';
import TabNav from './TabNav';


const Tab: React.FC = ({children}) => {
  const [content,setContent ] = useState<ITab[]|null>(null);
  const [tabList,setTabList ] = useState<ITab[]|undefined>([]);

  const asOnList=(tab:ITab,list:ITab[]): [boolean,number] => {
    let onlist=false;
    let count = 0;
    while((count<list!.length)){
      if(list[count]){
        if(list[count].title === tab.title){ 
          return [true,count]
        }
      }
      count++ 
    }
    return [onlist, count]
  }

  const addTab = useCallback((tab:ITab)=>{

    setTabList((oldTab)=>{
      if(oldTab){
        const newTabList = [...oldTab]
        if(newTabList.length>1 ){
          const [onList, index] = asOnList(tab,oldTab);
          if (onList){ 
            newTabList[index] = tab;
            return newTabList}
          else return  [...newTabList,tab]
        }else {
          return [...oldTab,tab]
        }
      }
    });
    
  },[])

  // useEffect(()=>{console.log(tabList)},[tabList])
  return (
     <TabContent>
    <TabContext.Provider value={{addTab}}>
        {children}
    </TabContext.Provider>
      <div>
        {content}
      </div>
     </TabContent>
  );
};




export { TabNav ,Tab};
