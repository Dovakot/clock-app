import styled from "styled-components";
import { ButtonMixin } from "../../../../app/styles/helpers/button";
import { Typography, TypographyVariant } from "../../typography";
import { Color } from "../../../../app/styles/tokens/colors";

enum Suffixes {
  ONE = 'one',
  FEW = 'few',
  MANY = 'many',
}

const PLUR_TEXT: any = {
  [Suffixes.ONE]: 'час',
  [Suffixes.FEW]: 'часа',
  [Suffixes.MANY]: 'часов',
};

const getTextForButton = (count: number) => {
  const pr = new Intl.PluralRules('ru-RU', {type: 'cardinal'});
  const suffix = pr.select(count);
  const plusSign = count > 0 ? '+' : '';

  return `${plusSign}${count} ${PLUR_TEXT[suffix]}`;
};

const StyledSpan = styled(Typography).attrs({
  as: 'span',
  $variant: TypographyVariant.TEXT_XS,
  color: Color.BLACK,
})`
  display: inline-block;
  padding: 2px 10px;

  white-space: nowrap;
  text-transform: uppercase;

  overflow: hidden;
  transition: opacity 0.4s ease-in-out;
`;

const StyledTime = styled(StyledSpan)``;

const StyledImhere = styled(StyledSpan)`
  background-color: ${Color.WHITE};
  border-radius: 32px;
`;

const StyledButton = styled.button`
  ${ButtonMixin}

  position: relative;

  margin-bottom: 16px;
  padding: 0;

  background-color: transparent;

  &:hover ${StyledTime},
  &:not(:hover) ${StyledImhere} {
    position: absolute;
    opacity: 0;
  }
`;

const OffsetTime = ({
  userUTC,
  currentUTC,
}: any) => {
  const timeOffset = currentUTC - userUTC;

  return (
    <StyledButton type="button">
      <StyledTime>{getTextForButton(timeOffset)}</StyledTime>
      <StyledImhere className="button-offset__imhere">Я тут</StyledImhere>
    </StyledButton>
  );
};

export { OffsetTime };
