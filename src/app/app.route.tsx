import React from 'react';
import { Login, Register } from 'auth';
import Address from 'profile/views/address';
import FoodCategory from 'food/views/category';
import PrivateRoute from './app.private-route';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';

function AppRoute() {
  const dashboardPath = '(/|/dashboard)';
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/address' component={Address} />
        <PrivateRoute exact path='/category' component={FoodCategory} />
        <PrivateRoute exact path={dashboardPath} component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
