import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap');
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    width: 90vw;
    margin: 0 auto;
    max-width: 1250px;
    font-size: 1.6rem;
    font-family: 'Open Sans', Arial, sans-serif; 
  }
`;

export default GlobalStyle;
