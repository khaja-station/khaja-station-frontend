import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import Input from 'common/components/input';
import { adminLogin } from 'api/request.api';
import SubmitButton from 'common/components';
import { LoginPayload } from 'auth/auth.types';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from 'layouts/auth-layout';
import { useModal, Modal } from 'common/components/modal';
import { loginValidationSchema } from 'auth/auth.validation';

const Login = () => {
  const { t } = useTranslation();
  const loginModal = useModal(true);

  const initialValues: LoginPayload = {
    email: '',
    password: '',
  };

  const at = (text: string) => t(`auth.${text}`);

  return (
    <AuthLayout>
      <Modal title={'Restaurant Login'} {...loginModal.props}>
        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values, actions) => {
            const { error } = await adminLogin(values);
            if (error?.status) {
              actions.setFieldError('password', error?.message || 'Something went wrong');
            }
            actions.setSubmitting(false);
          }}
        >
          {(props) => {
            const error = (field: keyof LoginPayload) =>
              props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

            const fieldInfo = (field: keyof LoginPayload) => {
              return {
                email: at('EMAIL_HELP_TEXT'),
                password: at('PASSWORD_HELP_TEXT'),
              }[field];
            };

            const helpText = (field: keyof LoginPayload) => {
              return error(field) ? error(field) : fieldInfo(field);
            };

            const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

            return (
              <form onSubmit={props.handleSubmit}>
                <Input
                  title={at('EMAIL')}
                  name='email'
                  type='email'
                  placeholder={at('ENTER_EMAIL')}
                  error={!!error('email')}
                  helperText={helpText('email')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <Input
                  name='password'
                  type='password'
                  title={at('PASSWORD')}
                  helperText={helpText('password')}
                  placeholder={at('ENTER_PASSWORD')}
                  error={!!error('password')}
                  handleOnBlur={props.handleBlur}
                  handleChange={props.handleChange}
                />
                <SubmitButton loading={props.isSubmitting} text={at('LOGIN')} disabled={!isValid()} />
              </form>
            );
          }}
        </Formik>
        <div className='text-center mt-4'>
          <Link to='/register' className='primary-link text-primary '>
            {at('NEW_KHAJA_STATION')}
          </Link>
        </div>
      </Modal>
    </AuthLayout>
  );
};

export default Login;
