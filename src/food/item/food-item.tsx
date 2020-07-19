import React from 'react';
import DashboardLayout from 'layouts/dashboard.layout';

import FoodItemList from './food-item.list';

const FoodItem = () => {
  return (
    <DashboardLayout>
      <div className='pl-2 pt-2'>
        <div className='row'>
          <div className='col-md-12'>
            <FoodItemList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FoodItem;
