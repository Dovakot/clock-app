import { createGlobalStyle } from "styled-components";

import { Font } from "./fonts";
import { Color } from "./colors";

export const GlobalResets = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: ${Color.DARK_BLUE_1}
  }

  ul,
  ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    align-content: start;
    min-width: 375px;
    min-height: 100%;
    margin: 0;
    padding: 0;

    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    font-family: ${Font.INTER};
    color: #000000;

    background-color: ${Color.WHITE};
  }
`;
