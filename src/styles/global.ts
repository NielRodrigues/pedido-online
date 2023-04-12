import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rowdies:wght@300;400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
  }
  html, body, div#root {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  body {
    background: #e9e2da;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fontFamily.sans};
    /*overflow-x: hidden;*/
  }
`
