import styled from "styled-components";

import { ClockSvg } from "./clock-svg";
import { ClockSettings, ButtonsClockSetting } from "./clock-settings";
import { ClockInfo } from "./clock-info";
import { OffsetTime } from "./offset-time";
import { Color } from "../../../app/styles/tokens/colors";
import { FormSearch } from "./form-search";

const MAX_HOURS = 60;

const getTimezoneOffset = () => {
  const date = new Date();

  return -1 * (date.getTimezoneOffset() / MAX_HOURS);
};

const StyledCard = styled.article`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px 20px;

  text-align: center;
  color: ${Color.BLACK};
  background-color: ${Color.LIGHT_GRAY_2};

  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: -1px 0 0 0 ${Color.LIGHT_GRAY_1} inset,
                 1px 0 0 0 ${Color.LIGHT_GRAY_1} inset;
  }

  &:hover ${ButtonsClockSetting} {
    opacity: 1;
  }
`;

const StyledWrapper = styled.div`
  max-width: 400px;
`;

const StyledCardEmptyWrapper = styled(StyledWrapper)`
  margin-top: 40px;
`;

const StyledGroupInfo = styled.div`
  min-height: 132px;
`;

const getClockCardEmpty = () => (
  <StyledCard>
    <StyledCardEmptyWrapper>
      <ClockSvg isAdded={true} />

      <StyledGroupInfo>
        <FormSearch />
      </StyledGroupInfo>
    </StyledCardEmptyWrapper>
  </StyledCard>
);

const getClockCard = (card: any) => (
  <StyledCard>
    <ClockSettings />

    <StyledWrapper>
      <OffsetTime
        userUTC={getTimezoneOffset()}
        currentUTC={card.utc}
      />

      <ClockSvg />

      <StyledGroupInfo>
        <ClockInfo {...card} />
      </StyledGroupInfo>
    </StyledWrapper>
  </StyledCard>
);

const ClockCard = ({ card }: any) => card ? getClockCard(card) : getClockCardEmpty();

export { ClockCard };
