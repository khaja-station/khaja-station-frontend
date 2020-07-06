import React from 'react';
import { Formik } from 'formik';
import { CategoryPayload } from 'food/food.type';
import { postCategory } from 'food/food.service';
import { useFoodDispatch } from 'food/food.context';

import AddCategoryForm from './add-category-form';
import { categoryValidationSchema } from './category.validation';

const initialValue: CategoryPayload = {
  name: '',
  parentId: '',
  description: '',
  promotionId: undefined,
  featuredImage: undefined,
};

const AddFoodCategory = () => {
  const dispatch = useFoodDispatch();
  return (
    <div className='card p-3'>
      <h4 className='card-header'>{'Add Food Category'}</h4>
      <div className='card-body'>
        <Formik
          validationSchema={categoryValidationSchema}
          initialValues={initialValue}
          validateOnBlur
          onSubmit={async (values, actions) => {
            const slug = values.name.trim().toLocaleLowerCase().split(' ').join('-');
            const payload = { ...values, slug };
            await postCategory({ dispatch, payload });
            actions.setSubmitting(false);
          }}
        >
          {(props) => <AddCategoryForm props={props} />}
        </Formik>
      </div>
    </div>
  );
};

export default AddFoodCategory;
