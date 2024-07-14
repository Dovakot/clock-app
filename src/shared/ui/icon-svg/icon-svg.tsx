import React from "react";

export enum IconNames {
  ADD = 'add',
  SETTING = 'setting',
  RELOAD = 'reload',
  SUNRISE = 'sunrise',
  SUNSET = 'sunset',
  WEATHER = 'weather',
  NOTE = 'note',
  DELETE = 'delete',
}

const ICONS_CONFIG: any = {
  [IconNames.ADD]: {
    width: 20,
    height: 20,
  },
  [IconNames.SETTING]: {
    width: 30,
    height: 27,
  },
  [IconNames.RELOAD]: {
    width: 21,
    height: 21,
  },
  [IconNames.NOTE]: {
    width: 20,
    height: 21,
  },
  [IconNames.DELETE]: {
    width: 20,
    height: 25,
  },
  [IconNames.SUNRISE]: {
    width: 20,
    height: 20,
  },
  [IconNames.SUNSET]: {
    width: 20,
    height: 12,
  },
  [IconNames.WEATHER]: {
    width: 30,
    height: 30,
  },
};

export const IconSvg = ({
  id,
  className,
}: any) => (
  <svg
    className={className}
    width={ICONS_CONFIG[id].width}
    height={ICONS_CONFIG[id].height}
    aria-hidden="true"
    focusable="false"
  >
    <use xlinkHref={`img/sprite.svg#icon-${id}`} />
  </svg>
);
