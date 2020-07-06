import React from 'react';
import useFetchAllMenus from './useFetchAllMenus';

const Menu = () => {
  useFetchAllMenus();
  return <div>this is the menu page</div>;
};

export default Menu;
