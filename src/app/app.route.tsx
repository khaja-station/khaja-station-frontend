import React from 'react';
import FoodRoute from 'food/food.route';
import Address from 'profile/views/address';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'common/components/not-found';

import PrivateRoute from './app.private-route';
import { appRouteConstants } from './app-route.constant';
import AuthRoute from 'auth/auth.route';

const {
  auth: { def },
} = appRouteConstants;

function AppRoute() {
  const dashboardPath = '(/|/dashboard)';

  return (
    <>
      <Switch>
        <PrivateRoute exact path='/address' component={Address} />

        <Route path={def}>
          <AuthRoute />
        </Route>

        <Route path='/food'>
          <FoodRoute />
        </Route>

        <PrivateRoute exact path={dashboardPath} component={DashboardView} />
        <Route exact path={'/404'} component={NotFound} />
      </Switch>
    </>
  );
}

export default AppRoute;
