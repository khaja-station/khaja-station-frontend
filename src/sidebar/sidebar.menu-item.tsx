import React from 'react';
import { AiFillLayout, AiOutlineUser } from 'react-icons/ai';
import { appRoutes } from 'app/app.route-paths';
import { SidebarPropertyType, MenuKey } from 'sidebar/sidebar.types';

import SidebarItem from './views/menu-sub-item';
import MenuRoute from 'menu/menu-route';

const { food, dashboard, user } = appRoutes;

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
  menu: {
    name: 'MENU',
    key: MenuKey.MENU,
    icon: <AiFillLayout />,
    child: <MenuRoute />,
  },
  user: {
    name: 'USER',
    key: MenuKey.USER,
    icon: <AiOutlineUser size={28} />,
    child: user.map((item: SidebarPropertyType, index: number) => <SidebarItem item={item} key={index} />),
  },
};
