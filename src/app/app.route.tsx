import React from 'react';
import { DashboardView } from 'dashboard/views';
import { Switch, Route } from 'react-router-dom';

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
