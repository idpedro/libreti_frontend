import React, {
  useState,
  useContext,
  useCallback,
  MouseEvent,
} from 'react';
import { APPContext, ThemeToggle } from '../../App';
import NavBar from '../../components/NavBar';
import { Container, ThemesContent, ThemeButton } from './styles';
import { Tab, TabNav } from '../../components/Tab';

interface IThemeComponent {
  themes: {};
  usedTheme:string;
  handlerClick: (name:ThemeToggle)=>void;
}

const ThemeComponent: React.FC<IThemeComponent> = ({
  usedTheme,
  themes,
  handlerClick,
}) => {
  const [useTheme, setUseTheme] = useState<string>((usedTheme as string));
    const changeTheme = (event: MouseEvent<HTMLButtonElement>)=>{
        setUseTheme((event.currentTarget.getAttribute('data-theme') as string))
        handlerClick((event.currentTarget.getAttribute('data-theme') as ThemeToggle))
    }
    return <>
        {Object.keys(themes).map((themeName) => (
            <ThemesContent key={themeName}>
                <h4>{themeName}</h4>
                <ThemeButton onClick={changeTheme} data-theme={themeName}>
                    Ativar
                </ThemeButton>
                {useTheme === themeName && <span>Ativo</span>}
            </ThemesContent>
        ))}
    </>;
};

const Config: React.FC = () => {

  const { themes, theme, toggleTheme } = useContext(APPContext);

  const handlerClick = useCallback((name:ThemeToggle):void => {
    toggleTheme(name);
  }, [toggleTheme]);


  return (
    <>
      <NavBar />
      <Container>
        <Tab>
          <TabNav name="Usúario" title="user" active={true}>
            <h1>Teste</h1>
          </TabNav>
          <TabNav name="Tema" title="thema">
            <ThemeComponent usedTheme={(theme.name as string)} themes={themes} handlerClick={handlerClick}>
            </ThemeComponent>
          </TabNav>
        </Tab>
      </Container>
    </>
  );
};

export default Config;
