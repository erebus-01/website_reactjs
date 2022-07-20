import { createGlobalStyle } from "styled-components";
import "@fontsource/urbanist"
import "@fontsource/open-sans"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: "Urbanist", sans-serif;
    overflow-x: hidden;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: 0.2px;
  }

  h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding:0
  }

  a{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input, label, select, button, textarea {
    margin: 0;
    border: 0;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    background: none;
    line-height: 1;
    font-family: "Urbanist", sans-serif;
    font-weight: 500;
    font-display: swap;
  }
  input, textarea {
      box-sizing: content-box;
  }
`

export default GlobalStyles