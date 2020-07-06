import React from 'react';
import { Login, Register, LogOut } from 'auth';
import FoodRoute from 'food/food.route';
import Address from 'profile/views/address';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'common/components/not-found';

import PrivateRoute from './app.private-route';

function AppRoute() {
  const dashboardPath = '(/|/dashboard)';
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />

        <PrivateRoute exact path='/address' component={Address} />

        <Route path='/food'>
          <FoodRoute />
        </Route>

        <PrivateRoute exact path={dashboardPath} component={DashboardView} />
        <PrivateRoute exact path={'/auth/logout'} component={LogOut} />
        <Route exact path={'/404'} component={NotFound} />
      </Switch>
    </>
  );
}

export default AppRoute;
