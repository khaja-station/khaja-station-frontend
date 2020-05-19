import React from 'react';
import { Login, Register } from 'auth';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';

function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/*' component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
