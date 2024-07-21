import styled from "styled-components";

import { IconInfo, InfoType } from "../../icon-info";
import { IconName } from "../../../../app/styles/tokens/icons";
import { Typography, TypographyVariant } from "../../typography";

const getFormattedDate = (strDate: Date) => {
  const date = new Date(strDate);
  const options: any = {
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('ru-RU', options);
};

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const StyledTitle = styled(Typography).attrs({ as: 'h3' })`
  margin: 0 0 12px;
  font-weight: 400;
`;

const StyledCity = styled(Typography).attrs({
  as: 'span',
  $variant: TypographyVariant.TITLE_LG,
})`
  display: block;
  margin: 0 0 8px;
`;

const StyledCountry = styled(Typography).attrs({ as: 'span' })`
  text-transform: uppercase;
`;

const ClockInfo = ({
  city,
  country,
  dateSunRise,
  dateSunSet,
  currentDate,
  weather,
}: any) => (
  <>
    <StyledList>
      <li>
        <IconInfo
          iconName={IconName.SUNRISE}
          name="Восход"
          type={InfoType.TIME}
          date={dateSunRise}
        />
      </li>
      <li>
        <IconInfo
          iconName={IconName.SUNSET}
          name="Закат"
          type={InfoType.TIME}
          date={dateSunSet}
        />
      </li>
    </StyledList>

    <StyledTitle>
      <StyledCity>{city}</StyledCity>
      <StyledCountry>{country}</StyledCountry>
    </StyledTitle>

    <StyledList>
      <li>
        <time dateTime={currentDate}>{getFormattedDate(currentDate)}</time>
      </li>
      <li>
        <IconInfo
          iconName={IconName.WEATHER}
          name={weather}
          type={InfoType.SPAN}
        />
      </li>
    </StyledList>
  </>
);

export { ClockInfo };
