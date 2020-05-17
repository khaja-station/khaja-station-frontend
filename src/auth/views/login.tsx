import React from 'react';
import { Formik } from 'formik';
import Input from 'common/components/input';
import { adminLogin } from 'api/request.api';
import SubmitButton from 'common/components';
import { AuthLayout } from 'layouts/auth-layout';
import { useModal, Modal } from 'common/components/modal';
import { loginValidationSchema } from 'auth/auth.validation';
import { LoginInitialValues } from 'auth/auth.types';

export const Login = () => {
  const loginModal = useModal(true);
  const initialValues: LoginInitialValues = {
    email: '',
    password: '',
  };
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
            const error = (field: keyof LoginInitialValues) =>
              props.touched[field] && props.values[field] && props.errors[field] ? props.errors[field] : undefined;

            const fieldInfo = (field: keyof LoginInitialValues) => {
              return {
                email: `We'll never share your email with anyone else.`,
                password: `At least one Uppercase,lowercase, a special character and of length of 8 letter`,
              }[field];
            };

            const helpText = (field: keyof LoginInitialValues) => {
              return error(field) ? error(field) : fieldInfo(field);
            };

            const isValid = () => props.isValid && Object.values(props.values).some(Boolean);

            return (
              <form onSubmit={props.handleSubmit}>
                <Input
                  title='Email Address'
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  error={!!error('email')}
                  helperText={helpText('email')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <Input
                  name='password'
                  type='password'
                  title='Password'
                  helperText={helpText('password')}
                  placeholder='Enter password'
                  error={!!error('password')}
                  handleOnBlur={props.handleBlur}
                  handleChange={props.handleChange}
                />
                <SubmitButton loading={props.isSubmitting} text='Login' disabled={!isValid()} />
              </form>
            );
          }}
        </Formik>
      </Modal>
    </AuthLayout>
  );
};
