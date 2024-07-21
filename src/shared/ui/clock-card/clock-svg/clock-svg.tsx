import styled, { css } from "styled-components";
import { Color } from "../../../../app/styles/tokens/colors";

const CSS = css`
  transform-origin: 50px 50px;
`;

const StyledDial = styled.ellipse`
  color: ${Color.LIGHT_GRAY_4};
`;

const StyledArrowHour = styled.rect`
  ${CSS}

  color: ${Color.BLACK};
`;

const StyledArrowMinute = styled.rect`
  ${CSS}

  color: ${Color.BLACK};
`;

const StyledArrowSecond = styled.rect`
  ${CSS}

  color: ${Color.RED_1};
`;

const StyledPointXS = styled.ellipse`
  color: ${Color.RED_1};
`;

const StyledPointLG = styled.ellipse`
  color: ${Color.BLACK};
`;

const StyledWrapper = styled.div<{ $isAdded: any }>`
  width: 100%;
  margin-bottom: 16px;

  color: ${Color.LIGHT_GRAY_1};

  ${({ $isAdded }) => $isAdded && css`
    ${StyledArrowHour},
    ${StyledArrowMinute},
    ${StyledArrowSecond},
    ${StyledPointXS},
    ${StyledPointLG} {
      color: inherit;
    }
  `}
`;

const ClockSvg = ({ isAdded }: any) => (
  <StyledWrapper $isAdded={isAdded} aria-label="Время">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <StyledDial
        rx={50}
        ry={50}
        cx={50}
        cy={50}
        fill="currentColor"
        fillOpacity={1}
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(330 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(300 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(270 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(240 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(210 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(180 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(150 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(120 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(90 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(60 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        transform="rotate(30 50 50)"
        fill="currentColor"
      />
      <rect
        width="2.5"
        height={5}
        x="48.75"
        y={9}
        fill="currentColor"
      />
      <StyledArrowHour
        width="3.25"
        height={17}
        x="48.375"
        y={33}
        fill="currentColor"
        style={{ transform: "rotate(127.5deg)" }}
      />
      <StyledArrowMinute
        width="3.25"
        height={29}
        x="48.375"
        y={20}
        fill="currentColor"
        style={{ transform: "rotate(810deg)" }}
      />
      <StyledPointLG
        rx="3.75"
        ry="3.75"
        cx={50}
        cy={50}
        fill="currentColor"
      />
      <StyledArrowSecond
        width="1.5"
        height={31}
        x="49.25"
        y={19}
        fill="currentColor"
        style={{ transform: "rotate(48318deg)" }}
      />
      <StyledPointXS
        rx="1.75"
        ry="1.75"
        cx={50}
        cy={50}
        fill="currentColor"
      />
      <defs />
    </svg>
  </StyledWrapper>
);

export { ClockSvg };
