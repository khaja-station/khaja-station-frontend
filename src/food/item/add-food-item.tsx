import React from 'react';
import { Formik } from 'formik';
import AddFoodItemForm from './add-food-item.form';
import { FoodItemPayload } from 'food/food.type';
import DashboardLayout from 'layouts/dashboard.layout';
import FoodItemPreview from './food-item.preview';

const initialValues: FoodItemPayload = {
  name: '',
  price: 0,
  menuId: '',
  discount: 0,
  nickName: '',
  categories: [],
  description: '',
  promotionId: '',
  featuredImage: undefined,
};
const AddFoodItem = () => {
  return (
    <DashboardLayout>
      <div className='pl-2 pt-2'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card p-3'>
              <h4 className='card-header'>{'Add Food Category'}</h4>
              <div className='card-body'>
                <Formik
                  initialValues={initialValues}
                  validateOnBlur
                  onSubmit={async (values, actions) => {
                    // await addMenu({ dispatch, payload: values });
                    actions.setSubmitting(false);
                  }}
                >
                  {(props) => <AddFoodItemForm props={props} />}
                </Formik>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <FoodItemPreview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddFoodItem;
