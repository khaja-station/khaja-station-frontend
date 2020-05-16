import MenuItem from './menu-item';
import React, { useState } from 'react';
import { menuItems } from '../sidebar.menu-item';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { MenuKey, MenuItemType } from 'sidebar/sidebar.types';

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
