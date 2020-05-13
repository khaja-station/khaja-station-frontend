import React, { Suspense } from 'react';
import { Theme } from './app.enum';
import TopNavbar from '../layouts/navbar/top.navbar';
import { useDarkTheme } from '../common/hooks/useDarkTheme';
import RestaurantDashboard from '../dashboard/views/dashboard.view';
import { BrowserRouter as Router } from 'react-router-dom';

import './app.i18n';

export default function Main() {
  const [theme, toggleTheme] = useDarkTheme();
  const themeClass = `theme ${theme === Theme.DARK ? 'theme--dark' : 'theme--light'}`;
  return (
    <Router>
      <Suspense fallback='....'>
        <div className={themeClass}>
          <TopNavbar toggleTheme={toggleTheme} />
          <RestaurantDashboard />
        </div>
      </Suspense>
    </Router>
  );
}
