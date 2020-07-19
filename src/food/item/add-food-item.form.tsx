import React from 'react';
import SubmitButton from 'common/components';
import { useTranslation } from 'react-i18next';
import { food } from 'food/food-context.types';
import { useFoodDispatch } from 'food/food.context';
import TextInput from 'common/components/input/text.input';
import FileInput from 'common/components/input/file.input';
import TextArea from 'common/components/input/text-area.input';
import SelectInput from 'common/components/input/select.input';
import { AddFoodItemFormProps, FoodItemPayload } from 'food/food.type';

const placeHolderOption = [
  {
    name: 'Select',
    value: '',
  },
];

const AddFoodItemForm: React.FC<AddFoodItemFormProps> = ({ props }) => {
  const { t } = useTranslation();
  const dispatch = useFoodDispatch();

  const ft = (text: string) => t(`food.${text}`);
  const ct = (text: string) => t(`common.${text}`);

  const error = (field: keyof FoodItemPayload) =>
    props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

  const helpText = (field: keyof FoodItemPayload) => {
    return error(field) ? error(field) : '';
  };

  const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

  const handleChange = (e: React.ChangeEvent<any>, field: keyof FoodItemPayload) => {
    const value = field === 'featuredImage' ? URL.createObjectURL(e.target?.files[0]) : e.target.value;
    dispatch({ type: food.ADD_FOOD_ITEM_PROPERTY, payload: { property: field, value } });
    props.handleChange(e);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        type='text'
        name='name'
        error={!!error('name')}
        title={ft('FOOD_NAME')}
        helperText={helpText('name') as string}
        handleOnBlur={props.handleBlur}
        placeholder={ft('FOOD_NAME')}
        handleChange={(e) => handleChange(e, 'name')}
      />
      <TextInput
        type='text'
        name='nickName'
        error={!!error('nickName')}
        title={ft('FOOD_NICK_NAME')}
        helperText={helpText('nickName') as string}
        handleOnBlur={props.handleBlur}
        placeholder={ft('FOOD_NICK_NAME')}
        // handleChange={props.handleChange}
        handleChange={(e) => handleChange(e, 'nickName')}
      />
      <TextArea
        type='text'
        name='description'
        error={!!error('description')}
        title={ft('FOOD_DESCRIPTION')}
        helperText={helpText('description') as string}
        handleOnBlur={props.handleBlur}
        placeholder={ft('FOOD_DESCRIPTION')}
        // handleChange={props.handleChange}
        handleChange={(e) => handleChange(e, 'description')}
      />
      <TextInput
        type='number'
        name='price'
        error={!!error('price')}
        title={ft('PRICE')}
        helperText={helpText('price') as string}
        handleOnBlur={props.handleBlur}
        placeholder={ft('PRICE')}
        // handleChange={props.handleChange}
        handleChange={(e) => handleChange(e, 'price')}
      />
      <TextInput
        type='number'
        name='discount'
        error={!!error('discount')}
        title={ft('DISCOUNT')}
        helperText={helpText('discount') as string}
        handleOnBlur={props.handleBlur}
        placeholder={ft('DISCOUNT')}
        // handleChange={props.handleChange}
        handleChange={(e) => handleChange(e, 'discount')}
      />
      <FileInput
        type='file'
        name='featuredImage'
        title={ft('FEATURED_IMAGE')}
        handleOnBlur={props.handleBlur}
        error={!!error('featuredImage')}
        placeholder={ft('FEATURED_IMAGE')}
        helperText={helpText('featuredImage') as string}
        value={props.values.featuredImage}
        handleChange={(event) => {
          handleChange(event, 'featuredImage');
          props.setFieldValue('featuredImage', event.currentTarget.files[0]);
        }}
      />
      <SelectInput
        name='promotionId'
        options={placeHolderOption}
        title={ft('SELECT_PROMOTION')}
        error={!!error('promotionId')}
        handleOnBlur={props.handleBlur}
        value={props.values.promotionId}
        // handleChange={props.handleChange}
        handleChange={(e) => handleChange(e, 'promotionId')}
        helperText={helpText('promotionId') as string}
      />
      <SubmitButton loading={props.isSubmitting} text={ct('SAVE')} disabled={!isValid()} />
    </form>
  );
};

export default AddFoodItemForm;
