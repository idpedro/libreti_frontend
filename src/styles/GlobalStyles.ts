import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color:var(--white)
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
  html{
    background:var(--gray);
  }
  :root{
    --background:#2b2b2b;
    --primary:#BD34D1;
    --white:#fff;
    --gray:#788896;
  }

`;
