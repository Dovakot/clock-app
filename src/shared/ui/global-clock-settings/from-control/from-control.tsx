import styled, { css } from "styled-components";

import { Color } from "../../../../app/styles/tokens/colors";
import { VisuallyHiddenMixin } from "../../../../app/styles/helpers/visually-hidden";
import { TypographyVariant, Typography } from "../../typography";
import { FieldType } from "../global-clock-settings";


const StyledLabelText = styled.span<{ $type: any }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ $type }: any) => $type === FieldType.RADIO && css`
    width: 100%;
    min-height: 36px;
    padding: 4px 22px;
  `}

  transition: background 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
`;

const StyledLabel = styled(Typography).attrs({
  as: 'label',
  $variant: TypographyVariant.TEXT_SM,
})<{$type: any}>`
  ${({ $type }: any) => $type === FieldType.CHECKBOX && css`
    & ${StyledLabelText}::before {
      content: "";

      width: 15px;
      height: 15px;
      margin-right: 10px;

      border: 2px solid ${Color.GRAY_1};
      border-radius: 4px;

      transition: background 0.5s ease-in-out, box-shadow 0.5s ease-in-out, border-color 0.5s ease-in-out;
    }
  `}
`;

const StyledInput = styled.input`
  ${VisuallyHiddenMixin}

  &[type="checkbox"]:not(:disabled) + ${StyledLabelText},
  &[type="radio"]:not(:checked):not(:disabled) + ${StyledLabelText} {
    cursor: pointer;
  }

  &[type="radio"]:checked + ${StyledLabelText} {
    background-color: ${Color.TRANSP_GREEN_1};
  }

  &[type="radio"]:focus + ${StyledLabelText},
  &[type="radio"]:not(:checked):not(:disabled) + ${StyledLabelText}:hover {
    box-shadow: 2px 0 0 ${Color.TRANSP_GRAY_2} inset;
  }

  &[type="radio"]:disabled + ${StyledLabelText} {
    background-color: ${Color.TRANSP_GRAY_2};
    opacity: 0.3;
  }

  &[type="checkbox"]:checked + ${StyledLabelText}::before {
    box-shadow: 0 0 0 2px ${Color.WHITE} inset;
    background-color: ${Color.GRAY_1};
  }

  &[type="checkbox"]:focus + ${StyledLabelText}::before,
  &[type="checkbox"]:not(:disabled) + ${StyledLabelText}:hover::before {
    border-color: ${Color.TRANSP_GREEN_1};
  }

  &[type="checkbox"]:disabled + ${StyledLabelText} {
    opacity: 0.3;
  }
`;

const FormControl = ({
  label,
  type,
  name,
  value,
  isChecked,
}: any) => (
  <StyledLabel $type={type}>
    <StyledInput
      type={type}
      name={name}
      defaultValue={value}
      defaultChecked={isChecked}
    />
    <StyledLabelText $type={type}>{label}</StyledLabelText>
  </StyledLabel>
);

export { FormControl };
