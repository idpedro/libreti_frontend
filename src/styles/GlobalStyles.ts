import { createGlobalStyle } from 'styled-components';

export const Colors = {
  primary: '#3f51b5',
  info: '#2C88D9',
  success: '#34d19d',
  danger: '#d81a39',
  buttonDefault: '#3f51b5',
};

export default createGlobalStyle`

  :root{
    --primary:${(props) => props.theme.colors.primary};
    --secundary:${(props) => props.theme.colors.secundary};
    --highlight:${(props) => props.theme.colors.highlight};
    --shadow:${(props) => props.theme.colors.shadow};
    --info:${(props) => props.theme.colors.logColors.info};
    --danger:${(props) => props.theme.colors.logColors.danger};
    --confirm:${(props) => props.theme.colors.logColors.success};
    --warning:${(props) => props.theme.colors.logColors.warning};
    --text:${(props) => props.theme.colors.text};
    --textDark:${(props) => props.theme.colors.textDark};
    --textButtons:${(props) => props.theme.colors.textButtons}
  }

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body,#root{
    max-height:100vh;
    max-width:100vw;
    height:100%;
    width:100%;
  }
  html,body{
    overflow:hidden;
  }
  #root{
    overflow:auto;
    scroll-snap-type:y mandatory;
    scroll-behavior:smooth;
    background:${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.text};

  }
  #root::-webkit-scrollbar {
    width: .5em;
  }

  #root::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color:darkpurple;
  }

  #root::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    outline: 1px solid  ${(props) => props.theme.colors.primary} ;
  }
  #root::-webkit-scrollbar-track{
    box-shadow:none;
  }
  *,button,input{
    border:0;
    background:none;
    font-family:-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  svg{
    color:#fff;
  }


 *::selection{
    background-color:var(--primary);
    color:var(--text)
  }

`;
