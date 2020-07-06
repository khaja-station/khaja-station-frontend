import React from 'react';
import MenuSubItem from 'sidebar/views/menu-sub-item';
import { SidebarPropertyType } from 'sidebar/sidebar.types';

import useFetchAllMenus from './useFetchAllMenus';

const MenuRoute = () => {
  const { loading, menus } = useFetchAllMenus();

  if (loading) {
    return <span>...</span>;
  }
  if (menus?.length > 0) {
    const menuRouteList = menus.map((menu: any, index: number) => ({
      title: `Menu Type ${index}`,
      route: `/food/menu`,
    }));
    if (menuRouteList) {
      return menuRouteList.map((item: SidebarPropertyType, index: number) => <MenuSubItem item={item} key={index} />);
    }
  }
  return <div />;
};

export default MenuRoute;
