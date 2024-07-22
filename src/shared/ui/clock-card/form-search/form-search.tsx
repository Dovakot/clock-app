import { useId } from "react";
import styled from "styled-components";

import { Color } from "../../../../app/styles/tokens/colors";
import { VisuallyHiddenMixin } from "../../../../app/styles/helpers/visually-hidden";
import { Typography, TypographyVariant } from "../../typography";

const StyledForm = styled(Typography).attrs({
  as: 'form',
  $variant: TypographyVariant.TEXT_SM,
  color: Color.BLACK,
})`
  position: relative;

  width: 100%;
  max-width: 294px;
  margin: 0 auto;

  text-align: left;
`;

const StyledLabel = styled.label`
  ${VisuallyHiddenMixin}
`;

const StyledInput = styled.input`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 40px;
  padding: 0 12px;

  font: inherit;
  border: 2px solid ${Color.LIGHT_GRAY_1};
  border-radius: 4px;

  transition: border-color 0.5s ease-in-out;

  &:hover,
  &:focus {
    outline: none;
    border-color: ${Color.TRANSP_GREEN_1};
  }
`;

const StyledList = styled.ul`
  position: absolute;
  left: 2px;
  right: 2px;
  top: calc(100% - 2px);
  z-index: 1;

  font: inherit;
  background-color: ${Color.WHITE};

  li {
    padding: 6px 12px;
    transition: background 0.5s ease-in-out;
  }

  li:hover {
    cursor: pointer;
    background-color: ${Color.TRANSP_GREEN_2};
  }
`;

const FormSearch = () => {
  const searchId = useId();

  return (
    <StyledForm>
      <StyledLabel htmlFor={searchId}>Поиск</StyledLabel>

      <StyledInput
        id={searchId}
        type="search"
        autoComplete="off"
        defaultValue=""
      />

      <StyledList>
        <li>Тест 1</li>
        <li>Тест 2</li>
      </StyledList>
    </StyledForm>
  );
};

export { FormSearch };
