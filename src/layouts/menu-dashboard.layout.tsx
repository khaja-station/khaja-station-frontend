import React from 'react';
import { useTranslation } from 'react-i18next';
interface Props {}
const MenuDashboardLayout: React.FC<Props> = ({ children }) => {
  const { t } = useTranslation();
  return (
    <div className='container-fluid menu-dashboard-layout-wrapper'>
      <div className='row'>
        <div className='col-md-2 sidebar-wrapper'>{t('common.SIDEBAR_TEXT')}</div>
        <div className='col-md-10  dashboard-wrapper'>
          <div className='dashboard-nav-wrapper'>dashboard nav</div>
          <div className='dashboard-content-wrapper'>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default MenuDashboardLayout;