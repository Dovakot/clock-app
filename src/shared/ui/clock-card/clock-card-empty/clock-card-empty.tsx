import React from "react";

import { ClockSvg } from "../clock-svg";
import { FormSearch } from "../form-search";

export const ClockCardEmpty = () => (
  <article className="card-clock card-clock--added">
    <div className="card-clock__wrapper">
      <div className="card-clock__clock">
        <ClockSvg />
      </div>
      <div className="card-clock__group-info">
        <FormSearch />
      </div>
    </div>
  </article>
);
