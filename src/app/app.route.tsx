import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DashboardView } from 'dashboard/views';

function AppRoute() {
  return (
    <>
      <Switch>
        <Route exact path='/*' component={DashboardView} />
      </Switch>
    </>
  );
}

export default AppRoute;
