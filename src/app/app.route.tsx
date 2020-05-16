import React from 'react';
import { LoginView } from 'auth';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';

function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={LoginView} />
        <Route exact path='/*' component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
