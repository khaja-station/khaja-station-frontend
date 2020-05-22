import React from 'react';
import { Login, Register } from 'auth';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';
import Address from 'profile/views/address';

function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/address' component={Address} />
        <Route exact path='/*' component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
