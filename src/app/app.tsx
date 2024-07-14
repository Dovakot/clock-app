import React from "react";

import { Header } from "../shared/ui/header";
import { SectionQuote } from "../shared/ui/section-quote";
import { SectionClock } from "../shared/ui/section-clock";

const App = () => (
  <>
    <Header />

    <main className="page-main">
      <h1 className="visually-hidden">Шар шаткого-ваткого временного-швременного вещества</h1>

      <SectionQuote />

      <SectionClock />
    </main>
  </>
);

export default App;
