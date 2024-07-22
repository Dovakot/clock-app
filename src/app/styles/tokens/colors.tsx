import { createGlobalStyle } from "styled-components";

enum Color {
  BLACK = 'var(--color-black)',
  WHITE = 'var(--color-white)',
  GRAY_1 = 'var(--color-gray-1)',
  LIGHT_GRAY_1 = 'var(--color-light-gray-1)',
  LIGHT_GRAY_2 = 'var(--color-light-gray-2)',
  LIGHT_GRAY_3 = 'var(--color-light-gray-3)',
  LIGHT_GRAY_4 = 'var(--color-light-gray-4)',
  DARK_GRAY_1 = 'var(--color-dark-gray-1)',
  RED_1 = 'var(--color-red-1)',
  ORANGE_1 = 'var(--color-orange-1)',
  BLUE_1 = 'var(--color-blue-1)',
  DARK_BLUE_1 = 'var(--color-dark-blue-1)',
  TRANSP_GREEN_1 = 'var(--color-transp-green-1)',
  TRANSP_GREEN_2 = 'var(--color-transp-green-2)',
  TRANSP_GRAY_1 = 'var(--color-transp-gray-1)',
  TRANSP_GRAY_2 = 'var(--color-transp-gray-2)',
  TRANSP_BLACK_1 = 'var(--color-transp-black-1)',
  TRANSP_BLACK_2 = 'var(--color-transp-black-2)',
}

const GlobalColors = createGlobalStyle`
  :root {
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gray-1: #bcb9b5;
    --color-light-gray-1: #cdcdcd;
    --color-light-gray-2: #d6d6d6;
    --color-light-gray-3: #c6c6c6;
    --color-light-gray-4: #f6f5f3;
    --color-dark-gray-1: #9f9f9f;
    --color-red-1: #c80f0a;
    --color-orange-1: #f8a278;
    --color-blue-1: #69c0ff;
    --color-dark-blue-1: #2384ca;
    --color-transp-green-1: rgba(112, 147, 108, 0.64);
    --color-transp-green-2: rgba(112, 147, 108, 0.3);
    --color-transp-gray-1: rgba(255, 255, 266, 0.4);
    --color-transp-gray-2: rgb(79, 79, 79, 0.4);
    --color-transp-black-1: rgba(0, 0, 0, 0.06);
    --color-transp-black-2: rgba(0, 0, 0, 0.6);
  }
`;

export { Color, GlobalColors };
