import React from 'react';
import { Formik } from 'formik';
import { adminLogin } from 'api/request.api';
import { AuthLayout } from 'layouts/auth-layout';
import { useModal, Modal } from 'common/components/modal';

export const Login = () => {
  const loginModal = useModal(true);
  return (
    <AuthLayout>
      <Modal title={'Admin Login'} {...loginModal.props}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validateOnBlur
          onSubmit={async (values, actions) => {
            const { error } = await adminLogin(values);
            if (error?.status) {
              actions.setFieldError('password', error?.message || 'Something went wrong');
            }
            actions.setSubmitting(false);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className='form-group pt-4'>
                <label htmlFor='adminEmail'>Email address</label>
                <input
                  type='email'
                  name='email'
                  id='adminEmail'
                  className='form-control'
                  placeholder='Enter email'
                  aria-describedby='emailHelp'
                  onChange={props.handleChange}
                />
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='form-group pt-4'>
                <label htmlFor='adminPassword'>Password</label>
                <input
                  name='password'
                  type='password'
                  id='adminPassword'
                  placeholder='Password'
                  className='form-control'
                  onChange={props.handleChange}
                />
              </div>
              {props.errors.password && (
                <div className='form-error-text text-danger text-center'> {props.errors.password}!!</div>
              )}
              <button
                type='submit'
                className='btn btn-primary btn-block mt-4 py-2 center'
                disabled={props.isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Modal>
    </AuthLayout>
  );
};
