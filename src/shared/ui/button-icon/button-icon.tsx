import React from "react";

import { IconSvg } from "../icon-svg";

export const ButtonIcon = ({
  iconId,
  ariaLabel,
}: any) => (
  <button
    className="button button--icon"
    type="button"
    aria-label={ariaLabel}
  >
    <IconSvg
      id={iconId}
      ariaLabel={ariaLabel}
    />
  </button>
);
