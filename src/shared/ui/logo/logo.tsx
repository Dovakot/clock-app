import { Link } from "react-router-dom";
import styled from "styled-components";

import logoImage from "../../assets/images/header-logo.svg"

const StyledLogo = styled(Link)``;

const StyledImage = styled.img`
  vertical-align: middle;

  @media (min-width: 1961px) {
    width: 271px;
  }
`;

const Logo = ({ className }: any) => (
  <StyledLogo className={className} to="/">
    <StyledImage
      src={logoImage}
      width={163}
      height={30}
      alt="Логотип «Timey Wimey»"
    />
  </StyledLogo>
);

export { Logo };
