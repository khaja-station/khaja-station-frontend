import React from 'react';
import { useTranslation } from 'react-i18next';
import { DashboardMenuItemProps } from 'sidebar/sidebar.types';

function MenuItem({ props }: DashboardMenuItemProps) {
  const { t } = useTranslation();
  const isExpanded = props.isExpanded(props.key);

  const ct = (text: string) => t(`common.${text}`);

  return (
    <div>
      <div className='d-flex justify-content-between' role='button' onClick={() => props.toggleExpansion(props.key)}>
        <div className='d-flex align-items-end'>
          <span className='left-icon'>{props.icon}</span>
          <h4>{ct(props.name)}</h4>
        </div>
        {props.chevronIcon(props.key)}
      </div>
      {isExpanded ? props.child : null}
    </div>
  );
}

export default MenuItem;
