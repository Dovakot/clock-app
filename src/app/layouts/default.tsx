import { Outlet } from "react-router-dom";
import styled from "styled-components";

import { Header } from "../../shared/ui/header";

const StyledDefaultLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  min-height: 100vh;
`;

const DefaultLayout = () => (
  <StyledDefaultLayout>
    <Header />

    <main>
      <Outlet />
    </main>
  </StyledDefaultLayout>
);

export { DefaultLayout };
