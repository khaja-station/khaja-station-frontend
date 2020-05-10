import React from "react";
import { Theme } from "../enum/theme";
import TopNavbar from "../navbar/top.navbar";
import { useDarkTheme } from "../hooks/useDarkTheme";
import RestaurantDashboard from "../dashboard/restaurant.dashboard";

export default function Main() {
  const [theme, toggleTheme] = useDarkTheme();
  const themeClass = `theme ${
    theme === Theme.DARK ? "theme--dark" : "theme--light"
  }`;
  return (
    <div className={themeClass}>
      <TopNavbar toggleTheme={toggleTheme} />
      <RestaurantDashboard />
    </div>
  );
}
