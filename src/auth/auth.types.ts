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

export interface AuthProviderType {
  children: React.ReactNode;
}
export type Dispatch = (action: any) => void;

export interface UserType {
  [key: string]: any;
}

export enum RoleEnum {
  ADMIN,
  GUEST,
}

export interface AuthType {
  token?: string;
  user?: UserType;
  roles?: RoleEnum[];
  isSigningIn: boolean;
  isAuthenticated: boolean;
}
