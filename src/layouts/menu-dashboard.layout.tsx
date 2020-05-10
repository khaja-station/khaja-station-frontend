import React from "react";
interface Props {}
const MenuDashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container menu-dashboard-layout-wrapper">
      <div className="col-md-4 sidebar-wrapper">sidbar here</div>
      <div className="col-md-8 dashboard-wrapper">
        <div className="dashboard-nav-wrapper">dashboard nav</div>
        <div className="dashboard-content-wrapper">{children}</div>
      </div>
    </div>
  );
};
export default MenuDashboardLayout;
