import styled from "styled-components";

import { ClockCard } from "../clock-card";
import { VisuallyHiddenMixin } from "../../../app/styles/helpers/visually-hidden";

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

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`
const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  li {
    display: flex;
  }
`;

const SectionClock = () => (
  <section>
    <StyledTitle>Список часов</StyledTitle>

    <StyledList>
      <li>
        <ClockCard card={clocksMock[0]} />
      </li>
      <li>
        <ClockCard card={clocksMock[1]} />
      </li>
      <li>
        <ClockCard />
      </li>
    </StyledList>
  </section>
);

export { SectionClock };
