import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SidebarItemType } from 'sidebar/sidebar.types';

const i = (Icon: any) => (Icon ? <Icon /> : null);

const MenuSubItem: React.FC<SidebarItemType> = ({ item }) => {
  const { t } = useTranslation();

  const ct = (text: string) => t(`common.${text}`);
  const requiredTranslation = item.isT !== undefined ? (item.isT !== false ? true : false) : true;

  return (
    <div className='sidebar-item-wrapper transition'>
      <Link className='link d-flex align-items-end pt-3' to={item.route}>
        {item.icon && <span className='left-icon'>{i(item.icon)}</span>}
        {requiredTranslation ? <span>{ct(item.title)}</span> : <span>{item.title}</span>}
      </Link>
    </div>
  );
};

export default MenuSubItem;
