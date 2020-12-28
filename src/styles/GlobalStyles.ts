import { createGlobalStyle } from 'styled-components';

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
    --primary:#6558F5;
    --white:#fff;
    --gray:#788896;
    --branches:#C54FD7;
  }

`;
