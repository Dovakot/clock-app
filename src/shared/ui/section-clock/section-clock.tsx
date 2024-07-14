import React from "react";

import { ClockCard } from "../clock-card";
import { ClockCardEmpty } from "../clock-card/clock-card-empty";

const clocksMock: any = [
  {
    city: 'Москва',
    country: 'Россия',
    dateSunRise: '2024-07-06 03:54',
    dateSunSet: '2024-07-06 21:13',
    currentDate: '2024-07-06 19:00',
    weather: '+19 °C',
    utc: 3,
  },
  {
    city: 'Веллингтон',
    country: 'Новая Зеландия',
    dateSunRise: '2024-07-06 04:59',
    dateSunSet: '2024-07-06 21:19',
    currentDate: '2024-07-06 19:00',
    weather: '+7 °C',
    utc: 12,
  },
];

export const SectionClock = () => (
  <section className="clocks">
    <h2 className="visually-hidden">Список часов</h2>

    <ul className="list-unstyled clocks__list">
      <li className="clocks__item">
        <ClockCard card={clocksMock[0]} />
      </li>
      <li className="clocks__item">
        <ClockCard card={clocksMock[1]} />
      </li>
      <li className="clocks__item">
        <ClockCardEmpty />
      </li>
    </ul>
  </section>
);
