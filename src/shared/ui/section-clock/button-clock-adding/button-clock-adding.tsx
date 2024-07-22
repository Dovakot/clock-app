import styled from "styled-components";

import { IconName } from "../../../../app/styles/tokens/icons";
import { ButtonMixin } from "../../../../app/styles/helpers/button";
import { Color } from "../../../../app/styles/tokens/colors";

import { IconSvg } from "../../icon-svg";
import { Typography, TypographyVariant } from "../../typography";

const StyledButton = styled(Typography).attrs({
  as: 'button',
  $variant: TypographyVariant.TEXT_SM,
})`
  ${ButtonMixin}

  padding: 6px;

  color: ${Color.WHITE};
  background-color: ${Color.TRANSP_GREEN_1};
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: 0;
    line-height: 0;
  }

  @media (min-width: 769px) {
    gap: 14px;
    padding: 9px 15px;
    gap: 14px;
  }

  @media (min-width: 1961px) {
    gap: 30px;
    padding: 13px 15px;
    font-size: 18px;
    line-height: 24px;
  }
}
`;

const ButtonClockAdding = () => (
  <StyledButton type="button">
    Добавить часы
    <IconSvg
      name={IconName.ADD}
    />
  </StyledButton>
);

export { ButtonClockAdding };
