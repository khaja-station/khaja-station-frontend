import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { adminLogin } from 'api/request.api';
import { LoginPayload } from 'auth/auth.types';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from 'layouts/auth-layout';
import { useModal, Modal } from 'common/components/modal';
import { loginValidationSchema } from 'auth/auth.validation';
import LoginForm from './login-form';

const initialValues: LoginPayload = {
  email: '',
  password: '',
};

const Login = () => {
  const { t } = useTranslation();
  const loginModal = useModal(true);

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
            return <LoginForm props={props} />;
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
