import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from 'common/components/input';
import SubmitButton from 'common/components';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from 'layouts/auth-layout';
import { RegisterPayload } from 'auth/auth.types';
import { registerRestaurant } from 'api/request.api';
import { useModal, Modal } from 'common/components/modal';
import { registerValidationSchema } from 'auth/auth.validation';

const Register = () => {
  const registerModal = useModal(true);
  const { t } = useTranslation();

  const initialValues: RegisterPayload = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const at = (text: string) => t(`auth.${text}`);

  return (
    <AuthLayout>
      <Modal title='Register Restaurant' {...registerModal.props}>
        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={async (values, actions) => {
            const { data, error } = await registerRestaurant(values);
            if (error || !data) {
              actions.setFieldError('confirmPassword', error?.message || at('SOMETHING_WENT_WRONG'));
            }
            actions.setSubmitting(false);
          }}
        >
          {(props) => {
            const error = (field: keyof RegisterPayload) =>
              props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

            const helpText = (field: keyof RegisterPayload) => {
              return error(field) ? error(field) : '';
            };

            const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

            return (
              <form onSubmit={props.handleSubmit}>
                <Input
                  name='name'
                  type='text'
                  error={!!error('name')}
                  title={at('RESTAURANT_NAME')}
                  helperText={helpText('name')}
                  handleOnBlur={props.handleBlur}
                  handleChange={props.handleChange}
                  placeholder={at('ENTER_RESTAURANT_NAME')}
                />
                <Input
                  name='email'
                  type='email'
                  title={at('EMAIL')}
                  error={!!error('email')}
                  helperText={helpText('email')}
                  placeholder={at('ENTER_EMAIL')}
                  handleOnBlur={props.handleBlur}
                  handleChange={props.handleChange}
                />
                <Input
                  name='password'
                  type='password'
                  title={at('PASSWORD')}
                  error={!!error('password')}
                  handleOnBlur={props.handleBlur}
                  helperText={helpText('password')}
                  handleChange={props.handleChange}
                  placeholder={at('ENTER_PASSWORD')}
                />
                <Input
                  type='password'
                  name='confirmPassword'
                  title={at('CONFIRM_PASSWORD')}
                  handleOnBlur={props.handleBlur}
                  handleChange={props.handleChange}
                  error={!!error('confirmPassword')}
                  placeholder={at('CONFIRM_PASSWORD')}
                  helperText={helpText('confirmPassword')}
                />
                <SubmitButton loading={props.isSubmitting} text={at('REGISTER')} disabled={!isValid()} />
              </form>
            );
          }}
        </Formik>
        <div className='text-center mt-4'>
          <Link to='/login' className='primary-link text-primary '>
            {at('ALREADY_HAVE_ACCOUNT')}
          </Link>
        </div>
      </Modal>
    </AuthLayout>
  );
};

export default Register;
