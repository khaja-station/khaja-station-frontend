import React from 'react';
import { sidebarData } from 'sidebar/sidebar.data';
import SidebarItem from './sidebar-item';
import { SidebarPropertyType } from 'sidebar/sidebar.types';

const { dashboard, food } = sidebarData;
const dashboardComponent = <SidebarItem item={dashboard} />;
const foodItemComponents = food.map((item: SidebarPropertyType, index: number) => (
  <SidebarItem item={item} key={index} />
));
function Sidebar() {
  return (
    <div>
      {dashboardComponent}
      <h1>Food Menu</h1>
      {foodItemComponents}
    </div>
  );
}

export default Sidebar;
