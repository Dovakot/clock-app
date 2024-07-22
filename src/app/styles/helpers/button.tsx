import { css } from "styled-components";

const ButtonMixin = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  border: none;

  transition: opacity 0.5s ease-in-out;

  &:not(:disabled):hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { ButtonMixin };
