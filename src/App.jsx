import { Analytics } from "@vercel/analytics/react";
import React from "react";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <div>
      <Portfolio />
      <Analytics />
    </div>
  );
};

export default App;
