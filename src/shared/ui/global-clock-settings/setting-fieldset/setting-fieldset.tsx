import styled, { css } from "styled-components";

import { Color } from "../../../../app/styles/tokens/colors";

import { FormControl } from "../from-control";
import { Legend } from "../legend";
import { FieldType } from "../global-clock-settings";

const StyledFildset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 8px 0;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;

    margin-left: 24px;
    margin-right: 24px;
  }
`;

const StyledList = styled.ul<{$type: any}>`
  ${({ $type }: any) => $type === FieldType.RADIO && css`
    border: 1px solid ${Color.LIGHT_GRAY_1};
    overflow: hidden;
    border-radius: 4px;

    & > li:not(:last-child) {
      border-bottom: 1px solid ${Color.LIGHT_GRAY_1};

      @media (min-width: 769px) {
        border-bottom: none;
        border-right: 1px solid ${Color.LIGHT_GRAY_1};
      }
    }
  `}

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;

const getFormControl = (item: any) => (
  <li key={item.label}>
    <FormControl {...item} />
  </li>
);

const SettingFieldset = ({
  legend,
  fields,
  classModifier,
  isLegend,
}: any) => (
  <StyledFildset>
    {isLegend && <Legend legend={legend} />}

    <StyledList $type={classModifier}>
      {fields.map(getFormControl)}
    </StyledList>
  </StyledFildset>
);

export { SettingFieldset };
