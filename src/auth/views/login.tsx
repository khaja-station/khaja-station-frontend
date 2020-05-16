import React from 'react';
import { AuthLayout } from 'layouts/auth-layout';
import { useModal, Modal } from 'common/components/modal';

export const Login = () => {
  const loginModal = useModal(true);
  return (
    <AuthLayout>
      <Modal title={'Login to Khaja Khabar'} {...loginModal.props}>
        <div className='bg-primary'>this is children for login modal</div>
      </Modal>
    </AuthLayout>
  );
};
