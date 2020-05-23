import React from 'react';
import { Login, Register } from 'auth';
import Address from 'profile/views/address';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';
import FoodCategory from 'food/views/category';

function AppRoute() {
  const dashboardPath = '(/|/dashboard)';
  return (
    <>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/address' component={Address} />
        <Route exact path='/category' component={FoodCategory} />
        <Route exact path={dashboardPath} component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
