import styled from "styled-components";

import { Color } from "../../../app/styles/tokens/colors";

import { ContainerMixin } from "../../../app/styles/helpers/container";
import { Logo } from "../logo";
import { ButtonClockAdding } from "../section-clock";
import { GlobalClockSetting } from "../global-clock-settings";

const StyledHeader = styled.header`
  position: relative;
  background-color: ${Color.WHITE};
`;

const StyledContainer = styled.div`
  ${ContainerMixin}

  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  min-height: 76px;

  @media (min-width: 1961px) {
    min-height: 110px;
  }
}
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;

  @media (min-width: 769px) {
    gap: 40px;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledContainer>
      <Logo />

      <StyledList>
        <li>
          <ButtonClockAdding />
        </li>
        <li>
          <GlobalClockSetting />
        </li>
      </StyledList>
    </StyledContainer>
  </StyledHeader>
);

export { Header };
