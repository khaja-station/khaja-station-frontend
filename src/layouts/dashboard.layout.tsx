import React from 'react';
import Sidebar from 'sidebar/views/sidebar';
interface Props {}

const sidebar = <Sidebar />;
const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='container-fluid menu-dashboard-layout-wrapper'>
      <div className='row'>
        <div className='col-md-2 sidebar-wrapper'>{sidebar}</div>
        <div className='col-md-10  dashboard-wrapper'>
          <div className='dashboard-nav-wrapper'>dashboard nav</div>
          <div className='dashboard-content-wrapper'>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
