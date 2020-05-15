import React, { useState } from 'react';
import SidebarItem from './sidebar-item';
import { sidebarData } from 'sidebar/sidebar.data';
import { CSSTransition } from 'react-transition-group';
import { FaChevronUp, FaChevronDown, FaHome } from 'react-icons/fa';
import { SidebarPropertyType, MenuKey } from 'sidebar/sidebar.types';

const { dashboard, food } = sidebarData;

const dashboardComponent = <SidebarItem item={dashboard} />;

const foodItemComponents = food.map((item: SidebarPropertyType, index: number) => (
  <SidebarItem item={item} key={index} />
));

function Sidebar() {
  const [expanded, setExpanded] = useState<MenuKey | null>(MenuKey.DASHBOARD);

  const isExpanded = (key: MenuKey): boolean => expanded === key;
  const chevronIcon = (key: MenuKey) => (isExpanded(key) ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />);

  const toggleExpansion = (key: MenuKey) => {
    isExpanded(key) ? setExpanded(null) : setExpanded(key);
  };

  const isDashboardExpanded = isExpanded(MenuKey.DASHBOARD);

  return (
    <div>
      <div className='sidebar-item'>
        <div
          className='d-flex justify-content-between'
          role='button'
          onClick={() => toggleExpansion(MenuKey.DASHBOARD)}
        >
          <div className='d-flex align-items-end'>
            <span className='left-icon'>
              <FaHome size={28} />
            </span>
            <h4>Dashboard</h4>
          </div>
          {chevronIcon(MenuKey.DASHBOARD)}
        </div>
        {isDashboardExpanded ? (
          <CSSTransition in={isDashboardExpanded} timeout={1000} classNames='alert'>
            {dashboardComponent}
          </CSSTransition>
        ) : null}
      </div>
      <div className='sidebar-item'>
        <h4>Food Menu</h4>
        {foodItemComponents}
      </div>
    </div>
  );
}

export default Sidebar;
