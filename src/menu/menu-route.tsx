import React from 'react';
import MenuSubItem from 'sidebar/views/menu-sub-item';
import { SidebarPropertyType } from 'sidebar/sidebar.types';

import useFetchAllMenus from './useFetchAllMenus';
import { appRouteConstants } from 'app/app-route.constant';
import { useFoodState } from 'food/food.context';

const MenuRoute = () => {
  const addMenu: SidebarPropertyType = {
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
  const { loading, error } = useFetchAllMenus();
  const { menus } = useFoodState();

  if (loading && !error) {
    return <span>.....</span>;
  }

  if (menus.result.length > 0) {
    const menuRouteList = menus.result.map(
      (menu: any, index: number): SidebarPropertyType => ({
        isT: false,
        title: menu?.name || 'DEFAULT_NAME',
        route: appRouteConstants.food.menu.view.replace(':slug', menu?.slug || ''),
      })
    );

    if (menuRouteList) {
      return (
        <>
          {menuRouteList.map((item: SidebarPropertyType, index: number) => (
            <MenuSubItem item={item} key={index} />
          ))}
        </>
      );
    }
  }

  return null;
};

export default MenuRoute;
