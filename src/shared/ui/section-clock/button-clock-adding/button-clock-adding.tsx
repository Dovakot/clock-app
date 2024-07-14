import React from "react";

import { IconSvg, IconNames } from "../../icon-svg";

export const ButtonClockAdding = () => (
  <button
    className="button button--default clock-setting__button"
    type="button"
  >
    Добавить часы
    <IconSvg
      id={IconNames.ADD}
      className="button__icon"
    />
  </button>
);
