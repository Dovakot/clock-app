import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

import { Theme, getTheme } from "./theme";

import { GlobalFonts } from "./styles/tokens/fonts";
import { GlobalResets } from "./styles/tokens/resets";
import { GlobalColors } from "./styles/tokens/colors";

import { DefaultLayout } from "./layouts/default";
import { IndexPage } from "../pages/index-page";
import { NotFound } from "../pages/not-found";
import { SpriteWithIcons } from "./styles/tokens/icons";

const App = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const toggleTheme = () => setTheme(getTheme(theme));

  return (
    <ThemeProvider theme={{ current: theme, toggleTheme }}>
      <Normalize />
      <GlobalColors />
      <GlobalFonts />
      <GlobalResets />

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <SpriteWithIcons />
    </ThemeProvider>
  );
};

export default App;
