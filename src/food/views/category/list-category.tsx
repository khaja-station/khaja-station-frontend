import React, { useState } from 'react';
import Table from 'common/components/table';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const headers = ['', '#', 'Title', 'Description', '', ''];
const categories = [
  {
    id: 1,
    title: 'Italian',
    description: 'Eu incididunt officia esse velit id quis Lorem pariatur.',
    edit: <button className='btn-primary btn-block p-1'>Edit</button>,
    delete: <button className='btn-danger btn-block p-1'>Delete</button>,
  },
  {
    id: 2,
    title: 'Continental',
    description:
      'Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum.Et ad et duis occaecat quis ex aliqua magna ipsum. ',
    edit: <button className='btn-primary btn-block p-1'>Edit</button>,
    delete: <button className='btn-danger btn-block p-1'>Delete</button>,
  },
];

const headerEl = headers.map((header, index) => (
  <th key={index} scope='col'>
    {header}
  </th>
));

const ExpandableRow = () => {
  return <div>hello expandable row</div>;
};

interface CategoryProps {
  expanded: number;
  select: (id: number) => void;
}

const Categories: React.FC<CategoryProps> = ({ expanded, select }) => {
  const categoryList = categories.map((cat, index) => {
    const selected = expanded === cat.id;
    return (
      <React.Fragment key={index}>
        <tr>
          <td onClick={() => select(cat.id)}>{selected ? <FaChevronDown /> : <FaChevronRight />}</td>
          <td>{cat.id}</td>
          <td>{cat.title}</td>
          <td className='text-truncate' style={{ maxWidth: 250 }}>
            {cat.description}
          </td>
          <td>{cat.edit}</td>
          <td>{cat.delete}</td>
        </tr>
        {selected ? (
          <tr>
            <td colSpan={6}>
              <ExpandableRow />
            </td>
          </tr>
        ) : null}
      </React.Fragment>
    );
  });

  return <React.Fragment>{categoryList}</React.Fragment>;
};

function FoodCategoryList() {
  const [expanded, setExpanded] = useState(0);
  return (
    <div className='card p-3'>
      <h3>{'Food Categories'}</h3>
      <Table headerEl={headerEl} bodyEl={<Categories expanded={expanded} select={(id) => setExpanded(id)} />} />
    </div>
  );
}

export default FoodCategoryList;
