import React,{useState,useContext,useRef,useEffect} from 'react';
import { Button} from './styled';
import TabContext from '../TabContext';

interface ITab {
    children:JSX.Element,
    title:string,
    initialState?:boolean
}
  
const Tab:React.FC<ITab> =({children,title,initialState})=>{
    const tabRef = useRef<HTMLButtonElement>(null);
    const {addTab} = useContext(TabContext);
    const [state,setState ]  = useState(initialState);

    const click = ()=>{
        setState(true)
    }
    useEffect(()=>{
        addTab && addTab({
            title:title,
            setState:setState,
            content:children
        })

    },[addTab,children,title])
    return(
        <Button  active={state} onClick={click} ref={tabRef}>
          {title}
        </Button>
    )
}


export default Tab;