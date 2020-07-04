import React from 'react';
import SubmitButton from 'common/components';
import { useTranslation } from 'react-i18next';
import Input from 'common/components/input/text.input';
import FileInput from 'common/components/input/file.input';
import TextArea from 'common/components/input/text-area.input';
import SelectInput from 'common/components/input/select.input';
import { AddCategoryFormProps, CategoryPayload } from 'food/food.type';

const parentOptions = [
  {
    name: 'Select',
    value: '',
  },
  {
    name: 'one',
    value: 1,
  },
  {
    name: 'two',
    value: 2,
  },
  {
    name: 'Three',
    value: 3,
  },
];

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ props }) => {
  const { t } = useTranslation();

  const ft = (text: string) => t(`food.${text}`);

  const ct = (text: string) => t(`common.${text}`);

  const error = (field: keyof CategoryPayload) =>
    props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

  const helpText = (field: keyof CategoryPayload) => {
    return error(field) ? error(field) : '';
  };

  const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

  return (
    <form onSubmit={props.handleSubmit}>
      <Input
        type='text'
        name='name'
        error={!!error('name')}
        title={ft('CATEGORY_NAME')}
        helperText={helpText('name')}
        handleOnBlur={props.handleBlur}
        placeholder={ft('CATEGORY_NAME')}
        handleChange={props.handleChange}
      />

      <TextArea
        name='description'
        error={!!error('description')}
        helperText={helpText('description')}
        handleOnBlur={props.handleBlur}
        handleChange={props.handleChange}
        title={ft('CATEGORY_DESCRIPTION')}
        placeholder={ft('CATEGORY_DESCRIPTION')}
      />

      <FileInput
        type='file'
        name='featuredImage'
        title={ft('FEATURED_IMAGE')}
        handleOnBlur={props.handleBlur}
        error={!!error('featuredImage')}
        placeholder={ft('FEATURED_IMAGE')}
        helperText={helpText('featuredImage')}
        value={props.values.featuredImage}
        handleChange={(event) => {
          props.setFieldValue('featuredImage', event.currentTarget.files[0]);
        }}
      />
      <SelectInput
        name='parentId'
        options={parentOptions}
        title={ft('SELECT_PARENT')}
        error={!!error('parentId')}
        value={props.values.parentId}
        handleOnBlur={props.handleBlur}
        helperText={helpText('parentId')}
        handleChange={props.handleChange}
      />
      <SelectInput
        name='promotionId'
        options={parentOptions}
        title={ft('SELECT_PROMOTION')}
        error={!!error('promotionId')}
        handleOnBlur={props.handleBlur}
        value={props.values.promotionId}
        handleChange={props.handleChange}
        helperText={helpText('promotionId')}
      />
      <SubmitButton loading={props.isSubmitting} text={ct('SAVE')} disabled={!isValid()} />
    </form>
  );
};

export default AddCategoryForm;
