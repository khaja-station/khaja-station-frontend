import React, { useState } from 'react';
import Table from 'common/components/table';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import categories from '__mocks__/categories.mock.json';

const headers = ['', '#', 'Title', 'Description', '', ''];

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
  const categoryList = categories.result.map((cat, index) => {
    const selected = expanded === cat.id;
    return (
      <React.Fragment key={index}>
        <tr>
          <td onClick={() => select(cat.id)}>{selected ? <FaChevronDown /> : <FaChevronRight />}</td>
          <td>{cat.id}</td>
          <td>{cat.name}</td>
          <td className='text-truncate' style={{ maxWidth: 250 }}>
            {cat.description}
          </td>
          <td>{<EditButton onPress={() => {}} />}</td>
          <td>{<DeleteButton onPress={() => {}} />}</td>
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
