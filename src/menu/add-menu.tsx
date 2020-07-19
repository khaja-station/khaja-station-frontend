import React from 'react';
import { Formik } from 'formik';
import AddMenuForm from './add-menu.form';
import { MenuPayload } from 'food/food.type';
import { useFoodDispatch } from 'food/food.context';
import { addMenu } from 'food/food.service';

const initialValues: MenuPayload = {
  name: '',
  description: '',
  featuredImage: undefined,
};
const AddMenu = () => {
  const dispatch = useFoodDispatch();

  return (
    <div className='card p-3'>
      <h4 className='card-header'>{'Add Food Category'}</h4>
      <div className='card-body'>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={async (values, actions) => {
            await addMenu({ dispatch, payload: values });
            actions.setSubmitting(false);
          }}
        >
          {(props) => <AddMenuForm props={props} />}
        </Formik>
      </div>
    </div>
  );
};

export default AddMenu;
