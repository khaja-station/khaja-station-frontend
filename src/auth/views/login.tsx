import React from 'react';
import { Formik } from 'formik';
import LoginForm from './login-form';
import { Link } from 'react-router-dom';
import { login } from 'auth/auth.service';
import { LoginPayload } from 'auth/auth.types';
import { useTranslation } from 'react-i18next';
import { AuthLayout } from 'layouts/auth-layout';
import { useAuthDispatch } from '../auth.context';
import { useModal, Modal } from 'common/components/modal';
import { loginValidationSchema } from 'auth/auth.validation';

const initialValues: LoginPayload = {
  email: '',
  password: '',
};

const Login = () => {
  const { t } = useTranslation();
  const loginModal = useModal(true);
  const dispatch = useAuthDispatch();

  const at = (text: string) => t(`auth.${text}`);

  return (
    <AuthLayout>
      <Modal title={'Restaurant Login'} {...loginModal.props}>
        <Formik
          validateOnBlur
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values, actions) => {
            await login({ dispatch, payload: values });
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
