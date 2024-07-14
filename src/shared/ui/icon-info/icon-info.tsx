import React from "react";

import { IconSvg } from "../icon-svg";

export enum InfoType {
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

export const IconInfo = ({
  id,
  name,
  type,
  date,
  className,
}: any) => (
  <span className="icon-info">
    <IconSvg id={id} className={className} />

    {getLabel(type, name, date)}
  </span>
);
