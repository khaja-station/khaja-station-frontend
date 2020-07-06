import { FormikProps } from 'formik';
import { StringKeyObject } from 'common/common.types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserType {
  [key: string]: any;
}

export enum RoleEnum {
  ADMIN,
  GUEST,
}

export enum AuthState {
  INITIAL,
  LOGGED_OUT,
  LOGGING_OUT,
  AUTHENTICATED,
  AUTHENTICATING,
  SIGN_IN_REJECTED,
  LOG_OUT_REJECTED,
}

export interface AuthType {
  token?: string;
  user?: UserType;
  roles?: RoleEnum[];
  authState: AuthState;
  isSigningIn: boolean;
  isAuthenticated: boolean;
}

export interface LoginFormProps {
  props: FormikProps<LoginPayload>;
}

export interface RegisterFormProps {
  props: FormikProps<RegisterPayload>;
}

export interface LoginServicePayload {
  dispatch: (args: StringKeyObject) => void;
  payload: LoginPayload;
}
