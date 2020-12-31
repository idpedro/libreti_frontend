import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      shadow: stringv;
      highlight: string;
      secundary: string;
      background: string;
      background_light: string;
      text: string;
      textButtons:string;
      textDark: string;
      logColors: {
        success: string;
        info: string;
        warning: string;
        danger: string;
      };
    };
  }
}
