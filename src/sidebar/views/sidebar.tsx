import MenuItem from './menu-item';
import React, { useState } from 'react';
import SidebarItem from './menu-sub-item';
import { AiFillLayout } from 'react-icons/ai';
import { sidebarData } from 'sidebar/sidebar.data';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { SidebarPropertyType, MenuKey, MenuItemType } from 'sidebar/sidebar.types';

const { food, dashboard } = sidebarData;

const menuItems = {
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

function Sidebar() {
  const [expanded, setExpanded] = useState<MenuKey | null>(MenuKey.DASHBOARD);

  const isExpanded = (key: MenuKey): boolean => expanded === key;

  const chevronIcon = (key: MenuKey) => (isExpanded(key) ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />);

  const toggleExpansion = (key: MenuKey) => {
    isExpanded(key) ? setExpanded(null) : setExpanded(key);
  };

  const children = Object.values(menuItems).map((item: MenuItemType, index: number) => (
    <MenuItem
      key={index}
      props={{
        isExpanded,
        chevronIcon,
        key: item.key,
        toggleExpansion,
        name: item.name,
        icon: item.icon,
        child: item.child,
      }}
    />
  ));

  return <div className='sidebar-item'>{children}</div>;
}

export default Sidebar;
