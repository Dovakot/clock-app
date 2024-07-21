import styled from "styled-components";

import { Typography, TypographyVariant } from "../../typography";

const StyledWrapper = styled(Typography).attrs({
  as: 'div',
  $variant: TypographyVariant.TEXT_SM,
})`
  margin-bottom: 10px;

  @media (min-width: 769px) {
    margin-bottom: 0;
    margin-right: 20px;

    font-size: ${TypographyVariant.TEXT_MD};
  }
`;

const Legend = ({ legend }: any) => (
  <StyledWrapper>
    <legend>{legend}</legend>
  </StyledWrapper>
);

export { Legend };
