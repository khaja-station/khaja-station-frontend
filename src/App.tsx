import React from "react";
import "./styles/app.scss";
import { AppProvider } from "./context/app-context";

function App() {
  return (
    <AppProvider>
      <div className="container text-center">hello world</div>
    </AppProvider>
  );
}

export default App;
