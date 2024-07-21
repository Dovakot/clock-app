import styled from "styled-components";

import { ButtonMixin } from "../../../app/styles/helpers/button";

import { IconSvg } from "../icon-svg";

const StyledButton = styled.button`
  ${ButtonMixin}

  padding: 6px;
  background: transparent;
`;

const ButtonIcon = ({
  className,
  buttonType,
  iconName,
  iconColor,
  ariaLabel,
}: any) => (
  <StyledButton
    className={className}
    type={buttonType}
    aria-label={ariaLabel}
  >
    <IconSvg
      name={iconName}
      color={iconColor}
    />
  </StyledButton>
);

export { ButtonIcon };
