import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --button: #3a74f1;
    --background: #d1d7e5;
    --forma: #ffffff;
    --divisor: #e9e9e9;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background: var(--background);
    height: 100%;
    -webkit-font-smoothing: antialiased;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, button {
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
  section {
    padding: 1rem;

    & + section {
      border-top: 1px solid var(--divisor);
    }
  }

`