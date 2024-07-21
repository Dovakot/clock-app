import styled, { css } from "styled-components";

import { Color } from "../../../app/styles/tokens/colors";

enum TypographyVariant {
  TITLE_LG = 'title-extra-large',
  QUOTE_LG = 'quote-large',
  TEXT_MD =  'text-medium',
  TEXT_SM = 'text-small',
  TEXT_XS = 'text-extra-small',
}

const TypographyVariantToCSS: any = {
  [TypographyVariant.TITLE_LG]: css`
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  `,
  [TypographyVariant.QUOTE_LG]: css`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
  `,
  [TypographyVariant.TEXT_MD]: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  `,
  [TypographyVariant.TEXT_SM]: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  [TypographyVariant.TEXT_XS]: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
};

const StyledTypography = styled.div.attrs(({ color }) => ({
  color: color ?? Color.BLACK
}))`
  ${({ $variant }: any) => TypographyVariantToCSS[$variant]}

  color: ${({ color }) => color};
`;

export { TypographyVariant, StyledTypography as Typography };
