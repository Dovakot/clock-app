import { css } from "styled-components";

const ContainerMixin = css`
  padding: 12px 20px;

  @media (min-width: 1961px) {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }
`;

export { ContainerMixin };
