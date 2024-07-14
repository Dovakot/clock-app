import React from "react";

import { IconInfo, InfoType } from "../../icon-info";
import { IconNames } from "../../icon-svg";

const getFormattedDate = (strDate: Date) => {
  const date = new Date(strDate);
  const options: any = {
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('ru-RU', options);
}

export const ClockInfo = ({
  city,
  country,
  dateSunRise,
  dateSunSet,
  currentDate,
  weather,
}: any) => (
  <>
    <ul className="list-unstyled card-clock__informer">
      <li>
        <IconInfo
          id={IconNames.SUNRISE}
          name="Восход"
          type={InfoType.TIME}
          date={dateSunRise}
          className="icon-info__image"
        />
      </li>
      <li>
        <IconInfo
          id={IconNames.SUNSET}
          name="Закат"
          type={InfoType.TIME}
          date={dateSunSet}
          className="icon-info__image"
        />
      </li>
    </ul>

    <h3 className="card-clock__title clock-title">
      <span className="clock-title__city">{city}</span>
      <span className="clock-title__country">{country}</span>
    </h3>

    <ul className="list-unstyled card-clock__informer">
      <li>
        <time dateTime={currentDate}>{getFormattedDate(currentDate)}</time>
      </li>
      <li>
        <IconInfo
          id={IconNames.WEATHER}
          name={weather}
          type={InfoType.SPAN}
          className="icon-info__image"
        />
      </li>
    </ul>
  </>
);
