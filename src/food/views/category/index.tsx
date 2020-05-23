import React from 'react';
import DashboardLayout from 'layouts/dashboard.layout';
import AddFoodCategory from './add-category';
import FoodCategoryList from './list-category';

const FoodCategory = () => {
  return (
    <DashboardLayout>
      <div className='pl-2 pt-2'>
        <div className='row'>
          <div className='col-md-6'>
            <AddFoodCategory />
          </div>
          <div className='col-md-6'>
            <FoodCategoryList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FoodCategory;
