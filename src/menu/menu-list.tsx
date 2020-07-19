import React from 'react';
import Table from 'common/components/table';
import { useFoodState } from 'food/food.context';
import { MenuPayload } from 'food/food.type';
import useFetchAllMenus from './useFetchAllMenus';

const EditButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <button className='btn-primary btn-block p-1' onClick={onPress}>
    Edit
  </button>
);

const DeleteButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <button className='btn-danger btn-block p-1' onClick={onPress}>
    Delete
  </button>
);

const MenuListItems: React.FC = () => {
  const { menus } = useFoodState();
  const menuList = menus?.map((menu: MenuPayload, index: number) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{menu.name}</td>
        <td>{menu.description}</td>
        <td>{<EditButton onPress={() => {}} />}</td>
        <td>{<DeleteButton onPress={() => {}} />}</td>
      </tr>
    );
  });

  return <>{menuList}</>;
};

const headers = ['#', 'Title', 'Description', '', ''];

const headerEl = headers.map((header, index) => (
  <th key={index} scope='col'>
    {header}
  </th>
));

const MenuList = () => {
  useFetchAllMenus();
  return (
    <div className='card p-3'>
      <h3>{'Available Menus'}</h3>
      <Table headerEl={headerEl} bodyEl={<MenuListItems />} />
    </div>
  );
};

export default MenuList;
