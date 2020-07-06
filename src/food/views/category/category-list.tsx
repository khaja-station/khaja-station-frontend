import Table from 'common/components/table';
import React, { useState, useEffect } from 'react';
import { fetchCategories } from 'food/food.service';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { useFoodDispatch, useFoodState } from 'food/food.context';

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

const Categories: React.FC = () => {
  const { categories } = useFoodState();
  const [expanded, setExpanded] = useState(0);

  const categoryList = categories?.result.map((cat, index) => {
    const catID = cat.id as number;
    const selected = expanded === catID;

    return (
      <React.Fragment key={index}>
        <tr>
          <td onClick={() => setExpanded(catID)}>{selected ? <FaChevronDown /> : <FaChevronRight />}</td>
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
  const dispatch = useFoodDispatch();

  useEffect(() => {
    const getCategoriesList = async () => {
      await fetchCategories(dispatch);
    };
    getCategoriesList();
  }, [dispatch]);

  return (
    <div className='card p-3'>
      <h3>{'Food Categories'}</h3>
      <Table headerEl={headerEl} bodyEl={<Categories />} />
    </div>
  );
}

export default FoodCategoryList;
