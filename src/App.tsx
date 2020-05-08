import React from "react";
import Main from "./main";
import "./styles/app.scss";
import { AppProvider } from "./context/app-context";

function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}

export default App;
