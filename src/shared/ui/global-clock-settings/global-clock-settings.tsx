import React from "react";

import { SettingFieldset } from "./setting-fieldset/setting-fieldset";

enum ThemeTypes {
  AUTO = 'auto',
  LIGHT = 'light',
  DARK = 'dark',
  CUSTOM = 'custom'
}

enum ClockTypes {
  CLASSIC = 'CLASSIC',
  DIGITAL = 'DIGITAL',
}

enum DialTypes {
  SERIFS = 'serifs',
  NUMERIC = 'numeric',
}

enum FieldType {
  RADIO = 'radio',
  CHECKBOX = 'checkbox',
}

enum FieldNames {
  THEME = 'clock-theme',
  CLOCK = 'clock-type',
  DIAL = 'clock-dial-type',
  SUN_POSITION = 'time-of-day',
}

const CUSTOM_FIELDS_DEFAULT: any = [
  {
    legend: 'Темы',
    fields: [
      {
        label: 'По умолчанию',
        type: FieldType.RADIO,
        name: FieldNames.THEME,
        value: ThemeTypes.AUTO,
        isChecked: false,
      },
      {
        label: 'Светлая',
        type: FieldType.RADIO,
        name: FieldNames.THEME,
        value: ThemeTypes.LIGHT,
        isChecked: false,
      },
      {
        label: 'Тёмная',
        type: FieldType.RADIO,
        name: FieldNames.THEME,
        value: ThemeTypes.DARK,
        isChecked: false,
      },
      {
        label: 'День и ночь',
        type: FieldType.RADIO,
        name: FieldNames.THEME,
        value: ThemeTypes.CUSTOM,
        isChecked: true,
      },
    ],
    classModifier: FieldType.RADIO,
    isLegend: true,
  },
  {
    legend: 'Часы',
    fields: [
      {
        label: 'Классические',
        type: FieldType.RADIO,
        name: FieldNames.CLOCK,
        value: ClockTypes.CLASSIC,
        isChecked: true,
      },
      {
        label: 'Цифровые',
        type: FieldType.RADIO,
        name: FieldNames.CLOCK,
        value: ClockTypes.DIGITAL,
        isChecked: false,
      },
    ],
    classModifier: FieldType.RADIO,
    isLegend: true,
  },
  {
    legend: 'Циферблат',
    fields: [
      {
        label: 'Засечки',
        type: FieldType.RADIO,
        name: FieldNames.DIAL,
        value: DialTypes.SERIFS,
        isChecked: true,
      },
      {
        label: 'Цифры',
        type: FieldType.RADIO,
        name: FieldNames.DIAL,
        value: DialTypes.NUMERIC,
        isChecked: false,
      },
    ],
    classModifier: FieldType.RADIO,
    isLegend: true,
  },
  {
    legend: 'Дополнительные настройки',
    fields: [
      {
        label: 'Восход и закат',
        type: FieldType.CHECKBOX,
        name: FieldNames.SUN_POSITION,
        value: FieldNames.SUN_POSITION,
        isChecked: true,
      },
    ],
    classModifier: FieldType.CHECKBOX,
    isLegend: false,
  },
];

const getFieldset = (item: any) => <SettingFieldset key={item.legend} {...item} />;

export const GlobalClockSetting = () => (
  <details className="clock-setting__nav nav-setting">
    <summary className="nav-setting__button" aria-label="Настроить">
      <svg
        width={30}
        height={27}
        aria-hidden="true"
        focusable="false"
      >
        <use xlinkHref="img/sprite.svg#icon-setting" />
      </svg>
    </summary>
    <div className="nav-setting__content">
      <form className="nav-setting__form">
        {CUSTOM_FIELDS_DEFAULT.map(getFieldset)}
      </form>
    </div>
  </details>
);
