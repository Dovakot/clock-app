import styled, { css } from "styled-components";

import BannerMobille from "../../assets/images/head-background-mobile.png";
import BannerMobille2x from "../../assets/images/head-background-mobile@2x.png";
import Banner from "../../assets/images/head-background.png";
import Banner2x from "../../assets/images/head-background@2x.png";

import { IconName } from "../../../app/styles/tokens/icons";
import { VisuallyHiddenMixin } from "../../../app/styles/helpers/visually-hidden";

import { ButtonIcon } from "../button-icon";
import { ContainerMixin } from "../../../app/styles/helpers/container";
import { Typography, TypographyVariant } from "../typography";
import { Color } from "../../../app/styles/tokens/colors";

const CSS = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const StyledSection = styled.section`
  position: relative;

  display: flex;
  align-items: center;
  min-height: 374px;

  &::before {
    ${CSS}

    content: "";
    background-color: ${Color.TRANSP_GRAY_2};
  }

  @media (min-width: 1961px) {
    min-height: 500px;
  }
`;

const StyledContainer = styled.div`
  ${ContainerMixin}
`;

const StyledTitle = styled.h2`
  ${VisuallyHiddenMixin}
`;

const StyledForm = styled.form`
  position: relative;
  z-index: 2;

  @media (min-width: 769px) {
    max-width: 700px;
  }
`;

const StyledButtonIcon = styled(ButtonIcon).attrs({ iconName: IconName.RELOAD })`
  margin-bottom: 20px;

  &:focus {
    transform: rotate(180deg);
    transition: transform 2s ease-in-out;
  }

  @media (min-width: 769px) {
    position: absolute;
    top: 0;
    left: 100%;

    min-width: 33px;
  }
`;

const StyledBlockquote = styled(Typography).attrs({
  as: 'blockquote',
  color: Color.WHITE,
  $variant: TypographyVariant.QUOTE_LG,
})`
  position: relative;
  z-index: 2;

  &,
  p {
    margin: 0;
  }
`;

const StyledImage = styled.img`
  ${CSS}

  z-index: -1;
  object-fit: cover;
  object-position: center;
`;

const StyledFooter = styled.footer`
  margin-top: 20px;
`;

const SectionQuote = ({ className }: any) => (
  <StyledSection className={className}>
    <StyledTitle>Случайная великая цитата</StyledTitle>

    <StyledContainer>
      <StyledForm>
        <StyledButtonIcon
          buttonType="button"
          ariaLabel="Обновить"
        />

        <StyledBlockquote cite="#">
          <p>
            Я буду всего лишь историей у&nbsp;тебя в&nbsp;голове...
            Только пусть это&nbsp;будет хорошая история, потому что,
            знаешь, это&nbsp;и&nbsp;была хорошая история. Самая лучшая.
          </p>
          <StyledFooter>11 Доктор</StyledFooter>
        </StyledBlockquote>
      </StyledForm>
    </StyledContainer>

    <StyledImage
      src={BannerMobille}
      srcSet={`${BannerMobille} 768w, ${BannerMobille2x} 1536w, ${Banner} 2450w, ${Banner2x} 5120w`}
    />
  </StyledSection>
);

export { SectionQuote };
