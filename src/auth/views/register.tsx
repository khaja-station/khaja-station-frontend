import React from 'react';
import { Formik } from 'formik';
import Input from 'common/components/input';
import SubmitButton from 'common/components';
import { AuthLayout } from 'layouts/auth-layout';
import { RegisterPayload } from 'auth/auth.types';
import { useModal, Modal } from 'common/components/modal';
import { registerValidationSchema } from 'auth/auth.validation';
import { registerRestaurant } from 'api/request.api';
import { Link } from 'react-router-dom';

const Register = () => {
  const registerModal = useModal(true);

  const initialValues: RegisterPayload = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <AuthLayout>
      <Modal title='Register Restaurant' {...registerModal.props}>
        <Formik
          validateOnBlur
          validationSchema={registerValidationSchema}
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            const { error } = await registerRestaurant(values);
            if (error?.status) {
              actions.setFieldError('password', error?.message || 'Something went wrong');
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
                  title='Restaurant Name'
                  name='name'
                  type='text'
                  placeholder='Enter Restaurant name'
                  error={!!error('name')}
                  helperText={helpText('name')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <Input
                  title='Email'
                  name='email'
                  type='email'
                  placeholder='Enter your email address'
                  error={!!error('email')}
                  helperText={helpText('email')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <Input
                  title='Password'
                  name='password'
                  type='password'
                  placeholder='Enter password'
                  error={!!error('password')}
                  helperText={helpText('password')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <Input
                  title='Confirm Password'
                  name='confirmPassword'
                  type='password'
                  placeholder='Confirm password'
                  error={!!error('confirmPassword')}
                  helperText={helpText('confirmPassword')}
                  handleChange={props.handleChange}
                  handleOnBlur={props.handleBlur}
                />
                <SubmitButton loading={props.isSubmitting} text='Register' disabled={!isValid()} />
              </form>
            );
          }}
        </Formik>
        <div className='text-center mt-4'>
          <Link to='/login' className='primary-link text-primary '>
            Already have Account?
          </Link>
        </div>
      </Modal>
    </AuthLayout>
  );
};

export default Register;
