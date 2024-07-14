import React from "react";

import { ButtonIcon } from "../../button-icon";
import { IconNames } from "../../icon-svg";

export const ClockSettings = () => (
  <ul className="list-unstyled card-clock__setting">
    <li>
      <ButtonIcon
        iconId={IconNames.NOTE}
        ariaLabel="Добавить заметку"
      />
    </li>
    <li>
      <ButtonIcon
        iconId={IconNames.DELETE}
        ariaLabel="Удалить часы"
      />
    </li>
  </ul>
);
