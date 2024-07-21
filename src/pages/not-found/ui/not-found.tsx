import styled from "styled-components";
import { Link } from "react-router-dom";

import image404 from "../../../shared/assets/images/404.svg";

import { Typography, TypographyVariant } from "../../../shared/ui/typography";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 500px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;

  text-align: center;
`;

const StyledTitle = styled(Typography).attrs({
  as: 'h2',
  $variant: TypographyVariant.TITLE_LG,
})`
  margin-top: 10px;
  font-weight: 600;
`;

const StyledParagraph = styled(Typography).attrs({
  as: 'p',
})``;

const NotFound = () => (
  <StyledWrapper>
    <img src={image404} width={80} height={80} alt="Грустный смайлик" />

    <StyledTitle>404</StyledTitle>
    <StyledParagraph>
      Сожалеем, запрошенная страница не может быть найдена.
      URL-адрес может быть написан с ошибкой или страница, которую вы ищете,
      больше не доступна.<br /><br />
      <Link className="link" to="/">
        Вернуться на главную страницу <b>&#8594;</b>
      </Link>
    </StyledParagraph>
  </StyledWrapper>
);

export { NotFound };
