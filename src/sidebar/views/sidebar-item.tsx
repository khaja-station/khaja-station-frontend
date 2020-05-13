import React from 'react';
import { SidebarItemType } from 'sidebar/sidebar.types';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
function SidebarItem({ item }: SidebarItemType) {
  const history = useHistory();
  const { t } = useTranslation();
  const ct = (text: string) => t(`common.${text}`);
  return (
    <div className='sidebar-item-wrapper'>
      <h4 className='sidebar-item-title' onClick={() => history.push(item.route)}>
        {ct(item.title)}
      </h4>
    </div>
  );
}

export default SidebarItem;
