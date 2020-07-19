import React from 'react';
import SubmitButton from 'common/components';
import { useTranslation } from 'react-i18next';
import TextInput from 'common/components/input/text.input';
import FileInput from 'common/components/input/file.input';
import { AddMenuFormProps, MenuPayload } from 'food/food.type';
import TextArea from 'common/components/input/text-area.input';

const AddMenuForm: React.FC<AddMenuFormProps> = ({ props }) => {
  const { t } = useTranslation();

  const ft = (text: string) => t(`food.${text}`);
  const ct = (text: string) => t(`common.${text}`);

  const error = (field: keyof MenuPayload) =>
    props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

  const helpText = (field: keyof MenuPayload) => {
    return error(field) ? error(field) : '';
  };

  const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

  return (
    <form onSubmit={props.handleSubmit}>
      <TextInput
        type='text'
        name='name'
        error={!!error('name')}
        title={ft('MENU_NAME')}
        helperText={helpText('name')}
        handleOnBlur={props.handleBlur}
        placeholder={ft('MENU_NAME')}
        handleChange={props.handleChange}
      />
      <TextArea
        type='text'
        name='description'
        error={!!error('description')}
        title={ft('MENU_DESCRIPTION')}
        helperText={helpText('description')}
        handleOnBlur={props.handleBlur}
        placeholder={ft('MENU_DESCRIPTION')}
        handleChange={props.handleChange}
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
      <SubmitButton loading={props.isSubmitting} text={ct('SAVE')} disabled={!isValid()} />
    </form>
  );
};

export default AddMenuForm;
