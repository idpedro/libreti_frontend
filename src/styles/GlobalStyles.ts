import { createGlobalStyle } from 'styled-components';

export const Colors = {
  primary: '#6558F5',
  info: '#2C88D9',
  success: '#34d19d',
  danger: '#d81a39',
  buttonDefault: '#3f51b5',
};

export default createGlobalStyle`
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

  }
  #root::-webkit-scrollbar {
    width: .5em;
  }

  #root::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color:darkpurple;
  }

  #root::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    outline: 1px solid var(--primary);
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

  :root{
    --background:#2b2b2b;
    --button-default:${Colors.buttonDefault};
    --primary:${Colors.primary};
    --white:#fff;
    --gray:#788896;
    --branches:#C54FD7;
    --info:${Colors.info};
    --danger:${Colors.danger};
    --confirm:${Colors.success};
    --warning:#F7C325;
    --text:#564d4d;
    --text-dark:#484848;
    --text-white:#fcfcfc;
  }

`;
