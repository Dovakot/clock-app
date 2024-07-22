import styled from "styled-components";

import { ButtonIcon } from "../../button-icon";
import { IconName } from "../../../../app/styles/tokens/icons";

const StyledSettings = styled.ul`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const ClockSettings = ({ className }: any) => (
  <StyledSettings className={className}>
    <li>
      <ButtonIcon
        buttonType="button"
        iconName={IconName.NOTE}
        ariaLabel="Добавить заметку"
      />
    </li>
    <li>
      <ButtonIcon
        buttonType="button"
        iconName={IconName.DELETE}
        ariaLabel="Удалить часы"
      />
    </li>
  </StyledSettings>
);

export { ClockSettings, StyledSettings as ButtonsClockSetting };
