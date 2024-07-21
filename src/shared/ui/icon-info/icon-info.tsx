import React from "react";

import { IconSvg } from "../icon-svg";
import { Color } from "../../../app/styles/tokens/colors";
import styled from "styled-components";

enum InfoType {
  SPAN = 'span',
  TIME = 'time',
}

const getTime = (strDate: Date) => {
  const date = new Date(strDate);

  return `${date.getHours()}:${date.getMinutes()}`;
}

const getLabel = (
  key: string,
  name: string,
  date: any,
) => {
  switch (key) {
    case InfoType.TIME:
      return (<time dateTime={date}>{getTime(date)}</time>);

    default:
      return (<span>{name}</span>);
  }
};

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const IconInfo = ({
  iconName,
  name,
  type,
  date,
}: any) => (
  <StyledIcon>
    <IconSvg
      name={iconName}
      color={Color.BLACK}
    />

    {getLabel(type, name, date)}
  </StyledIcon>
);

export { InfoType, IconInfo };
