import React from 'react';
import { Formik } from 'formik';
import AddCategoryForm from './add-category-form';
import { CategoryPayload } from 'food/food.type';
import { categoryValidationSchema } from './category.validation';

const initialValue: CategoryPayload = {
  title: '',
  parentId: '',
  promotionId: undefined,
  description: '',
  featuredImage: undefined,
};

const AddFoodCategory = () => {
  return (
    <div className='card p-3'>
      <h4 className='card-header'>{'Add Food Category'}</h4>
      <div className='card-body'>
        <Formik
          validationSchema={categoryValidationSchema}
          initialValues={initialValue}
          validateOnBlur
          onSubmit={(values, actions) => {
            // onSubmit functionality
          }}
        >
          {(props) => <AddCategoryForm props={props} />}
        </Formik>
      </div>
    </div>
  );
};

export default AddFoodCategory;
