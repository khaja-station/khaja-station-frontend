import React from 'react';
import { useFoodState } from 'food/food.context';

const FoodItemPreview: React.FC = () => {
  const { foodItem } = useFoodState();

  return (
    <div className='p-3'>
      <h3>{'Preview'}</h3>
      <div className='card p-3 d-flex flex-row'>
        <div className='img-wrapper-small p-2'>
          <img src={foodItem.featuredImage as string} alt={foodItem.name} className='w-100 h-100' />
        </div>
        <div className='px-4'>
          <h4 className='py-1'>{foodItem.name}</h4>
          <h5 className='py-1'>{foodItem.nickName}</h5>
          <p className='py-1'>{foodItem.description}</p>
          <div className='badge badge-pill badge-primary p-2 '>Price:$ {foodItem.price || '0'}</div>
          <div className='badge badge-pill badge-success p-2 ml-2'>Discount:$ {foodItem.discount || '0'}</div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemPreview;
