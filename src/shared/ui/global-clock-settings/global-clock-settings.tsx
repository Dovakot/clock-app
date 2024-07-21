import styled from "styled-components";

import { Color } from "../../../app/styles/tokens/colors";
import { IconName } from "../../../app/styles/tokens/icons";

import { SettingFieldset } from "./setting-fieldset/setting-fieldset";
import { IconSvg } from "../icon-svg";

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

const StyledWrapper = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 8px 20px;

  box-sizing: border-box;

  background-color: ${Color.WHITE};
  border-top: 1px solid ${Color.TRANSP_GREEN_1};

  @media (min-width: 1961px) {
    padding: 20px;
  }
`;

const StyledDetails = styled.details`
  @keyframes setting-open {
    0% {
      opacity: 0;
      margin-left: -10px;
    }

    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  & ${StyledWrapper} {
    animation: setting-open 0.5s ease-in-out;
  }
`;

const StyledForm = styled.form`
  @media (min-width: 769px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledSummary = styled.summary`
  transition: opacity 0.5s ease-in-out;

  &::marker {
    content: "";
    display: none;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const getFieldset = (item: any) => <SettingFieldset key={item.legend} {...item} />;

const GlobalClockSetting = () => (
  <StyledDetails>
    <StyledSummary aria-label="Настроить">
      <IconSvg
        name={IconName.SETTING}
        color={Color.GRAY_1}
      />
    </StyledSummary>

    <StyledWrapper>
      <StyledForm>
        {CUSTOM_FIELDS_DEFAULT.map(getFieldset)}
      </StyledForm>
    </StyledWrapper>
  </StyledDetails>
);

export { FieldType, GlobalClockSetting };
