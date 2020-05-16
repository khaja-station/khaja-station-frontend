import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardView } from 'dashboard/views';
import { LoginView } from 'auth';

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
