import React from "react";
import Main from "./main";
import { AppProvider } from "./app.context";

import "../styles/app.css";

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
