import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'sidebar/sidebar.types';

const i = (Icon: any) => (Icon ? <Icon /> : null);
function MenuSubItem({ item }: SidebarItemType) {
  const { t } = useTranslation();

  const ct = (text: string) => t(`common.${text}`);

  return (
    <div className='sidebar-item-wrapper transition'>
      <Link className='link d-flex align-items-end' to={item.route}>
        {item.icon && <span className='left-icon'>{i(item.icon)}</span>}
        <span>{ct(item.title)}</span>
      </Link>
    </div>
  );
}

export default MenuSubItem;
