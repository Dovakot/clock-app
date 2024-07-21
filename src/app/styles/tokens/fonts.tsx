import { createGlobalStyle } from "styled-components";

import interRegular from "../../../shared/assets/fonts/Inter-Regular.woff2";
import interSemiBold from "../../../shared/assets/fonts/Inter-SemiBold.woff2";

enum Font {
  INTER = 'var(--font-inter)',
}

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${interRegular});
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${interSemiBold});
  }

  :root {
    --font-inter: 'Inter', 'Verdana', sans-serif;
  }
`;

export { Font, GlobalFonts };
