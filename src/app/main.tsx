import AppRoute from './app.route';
import { storage } from './app.storage';
import { auth } from 'auth/auth-context.types';
import { Theme, StorageKey } from './app.types';
import React, { Suspense, useEffect } from 'react';
import { useAuthDispatch } from 'auth/auth.context';
import TopNavbar from '../layouts/navbar/top.navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDarkTheme } from '../common/hooks/useDarkTheme';

import './app.i18n';

export default function Main() {
  const [theme, toggleTheme] = useDarkTheme();
  const dispatch = useAuthDispatch();
  const themeClass = `theme ${theme === Theme.DARK ? 'theme--dark' : 'theme--light'}`;

  useEffect(() => {
    const { data, error } = storage.get(StorageKey.AUTH);
    if (!error) {
      dispatch({ type: auth.SIGN_IN_SUCCESS, payload: data });
    }
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback='....'>
        <div className={themeClass}>
          <div className='app-wrapper'>
            <TopNavbar toggleTheme={toggleTheme} />
            <AppRoute />
          </div>
        </div>
      </Suspense>
    </Router>
  );
}
