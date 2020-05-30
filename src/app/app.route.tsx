import React from 'react';
import { Login, Register } from 'auth';
import Address from 'profile/views/address';
import FoodCategory from 'food/views/category';
import PrivateRoute from './app.private-route';
import { DashboardView } from 'dashboard/views';
import { Switch, Route, Redirect } from 'react-router-dom';
import { FoodProvider } from 'food/food.context';
import NotFound from 'common/components/not-found';

function AppRoute() {
  const dashboardPath = '(/|/dashboard)';
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/address' component={Address} />
        <FoodRoute />
        <PrivateRoute exact path={dashboardPath} component={DashboardView} />
        <Route exact path={'/404'} component={NotFound} />
      </Switch>
    </>
  );
}

function FoodRoute() {
  return (
    <Switch>
      <FoodProvider>
        <PrivateRoute exact path='/category' component={FoodCategory} />
        <Route exact path={'/404'} component={NotFound} />
        <Redirect to={'/404'} />
      </FoodProvider>
    </Switch>
  );
}

export default AppRoute;
