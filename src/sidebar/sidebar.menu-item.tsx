import React from 'react';
import { AiFillLayout } from 'react-icons/ai';
import { appRoutes } from 'app/app.route-paths';
import { SidebarPropertyType, MenuKey } from 'sidebar/sidebar.types';

import SidebarItem from './views/menu-sub-item';

const { food, dashboard } = appRoutes;

export const menuItems = {
  dashboard: {
    name: 'DASHBOARD',
    icon: <AiFillLayout />,
    key: MenuKey.DASHBOARD,
    child: <SidebarItem item={dashboard} />,
  },
  food: {
    name: 'FOOD',
    key: MenuKey.FOOD,
    icon: <AiFillLayout />,
    child: food.map((item: SidebarPropertyType, index: number) => <SidebarItem item={item} key={index} />),
  },
};
