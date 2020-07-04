import React from 'react';
import NotFound from 'common/components/not-found';
import { Switch, Redirect } from 'react-router-dom';

import FoodCategory from './views/category';
import { FoodProvider } from './food.context';
import PrivateRoute from 'app/app.private-route';

function FoodRoute() {
  return (
    <FoodProvider>
      <Switch>
        <PrivateRoute exact path='/food' component={FoodCategory} />
        <PrivateRoute exact path='/food/cat' component={FoodCategory} />
        <PrivateRoute exact path={'/food/404'} component={NotFound} />

        <Redirect to={'/food/404'} />
      </Switch>
    </FoodProvider>
  );
}

export default FoodRoute;
