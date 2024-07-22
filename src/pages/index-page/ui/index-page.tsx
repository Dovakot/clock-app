import styled from "styled-components";

import { VisuallyHiddenMixin } from "../../../app/styles/helpers/visually-hidden";

import { SectionQuote } from "../../../shared/ui/section-quote";
import { SectionClock } from "../../../shared/ui/section-clock";


const StyledTitle = styled.h1`
  ${VisuallyHiddenMixin}
`;

const IndexPage = () => (
  <>
    <StyledTitle>Оптика «Зоркий»</StyledTitle>

    <SectionQuote />
    <SectionClock />
  </>
);

export { IndexPage };
