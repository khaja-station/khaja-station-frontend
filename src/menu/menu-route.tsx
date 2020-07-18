import React from 'react';
import MenuSubItem from 'sidebar/views/menu-sub-item';
import { SidebarPropertyType } from 'sidebar/sidebar.types';

import useFetchAllMenus from './useFetchAllMenus';
import { appRouteConstants } from 'app/app-route.constant';

const MenuRoute = () => {
  const addMenu = {
    title: 'ADD_MENU',
    route: appRouteConstants.food.menu.add,
  };

  return (
    <>
      <MenuSubItem item={addMenu} />
      <FetchedMenuRoute />
    </>
  );
};

const FetchedMenuRoute = () => {
  const { loading, menus, error } = useFetchAllMenus();

  if (loading && !error) {
    return <span>.....</span>;
  }

  if (menus?.length > 0) {
    const menuRouteList = menus.map((menu: any, index: number) => ({
      title: menu?.name || 'Default Name',
      route: appRouteConstants.food.menu.view.replace(':slug', menu?.slug || ''),
    }));

    if (menuRouteList) {
      return menuRouteList.map((item: SidebarPropertyType, index: number) => <MenuSubItem item={item} key={index} />);
    }
  }

  return null;
};

export default MenuRoute;
