import React from 'react';
import useFetchAllMenus from './useFetchAllMenus';
import DashboardLayout from 'layouts/dashboard.layout';
import AddMenu from './add-menu';
import MenuList from './menu-list';

const Menu = () => {
  useFetchAllMenus();
  return (
    <DashboardLayout>
      <div className='pl-2 pt-2'>
        <div className='row'>
          <div className='col-md-6'>
            <AddMenu />
          </div>
          <div className='col-md-6'>
            <MenuList />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Menu;
