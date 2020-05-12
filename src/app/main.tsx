import React from 'react';
import { Theme } from './app.enum';
import TopNavbar from '../layouts/navbar/top.navbar';
import { useDarkTheme } from '../common/hooks/useDarkTheme';
import RestaurantDashboard from '../dashboard/view/dashboard.view';

export default function Main() {
  const [theme, toggleTheme] = useDarkTheme();
  const themeClass = `theme ${theme === Theme.DARK ? 'theme--dark' : 'theme--light'}`;
  return (
    <div className={themeClass}>
      <TopNavbar toggleTheme={toggleTheme} />
      <RestaurantDashboard />
    </div>
  );
}
