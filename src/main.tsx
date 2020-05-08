import React from "react";
import { useAppState } from "./context/app-context";

export default function Main() {
  const { theme } = useAppState();
  const themeClass = `theme ${
    theme === "dark" ? "theme--dark" : "theme-light"
  }`;
  return (
    <div className={themeClass}>
      <div className="test">this is the test div</div>
    </div>
  );
}
