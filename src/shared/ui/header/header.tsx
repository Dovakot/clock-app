import React from "react";

import { Logo } from "../logo";
import { ButtonClockAdding } from "../section-clock";
import { GlobalClockSetting } from "../global-clock-settings";

export const Header = () => (
  <header className="page-header">
    <div className="container page-header__container">
      <Logo />

      <ul className="list-unstyled clock-setting">
        <li className="clock-setting__item">
          <ButtonClockAdding />
        </li>
        <li className="clock-setting__item">
          <GlobalClockSetting />
        </li>
      </ul>
    </div>
  </header>
);
