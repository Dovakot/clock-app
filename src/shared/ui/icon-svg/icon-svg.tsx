import styled, { css } from "styled-components";

import { Color } from "../../../app/styles/tokens/colors";
import { IconName } from "../../../app/styles/tokens/icons";

const IconSizeToCSS: any = {
  [IconName.ADD]: css`
    width: 20px;
    height: 20px;
  `,
  [IconName.SETTING]: css`
    width: 30px;
    height: 27px;
  `,
  [IconName.RELOAD]: css`
    width: 21px;
    height: 21px;
  `,
  [IconName.NOTE]: css`
    width: 20px;
    height: 21px;
  `,
  [IconName.DELETE]: css`
    width: 20px;
    height: 25px;
  `,
  [IconName.SUNRISE]: css`
    width: 20px;
    height: 20px;
  `,
  [IconName.SUNSET]: css`
    width: 20px;
    height: 12px;
  `,
  [IconName.WEATHER]: css`
    width: 30px;
    height: 30px;
  `,
};

const StyledIcon = styled.svg.attrs(({ color }) => ({
  color: color ?? Color.WHITE
}))`
  ${({ name }: any) => IconSizeToCSS[name]}

  color: ${({ color }) => color};
`;

const IconSvg = ({
  className,
  name,
  color,
}: any) => {
  const xlinkHref = `#icon-${name}`;

  return (
    <StyledIcon
      className={className}
      name={name}
      color={color}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={xlinkHref} />
    </StyledIcon>
  );
};

export { IconSvg };
