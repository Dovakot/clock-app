import React from "react";

import { ClockSvg } from "./clock-svg";
import { ClockSettings } from "./clock-settings";
import { ClockInfo } from "./clock-info";
import { OffsetTime } from "./offset-time";

const MAX_HOURS = 60;

const getTimezoneOffset = () => {
  const date = new Date();

  return -1 * (date.getTimezoneOffset() / MAX_HOURS);
};


export const ClockCard = ({card}: any) => (
  <article className="card-clock">
    <ClockSettings />

    <div className="card-clock__wrapper">
      <OffsetTime
        userUTC={getTimezoneOffset()}
        currentUTC={card.utc}
      />

      <ClockSvg />

      <div className="card-clock__group-info">
        <ClockInfo {...card} />
      </div>
    </div>
  </article>
);
