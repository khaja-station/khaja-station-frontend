import React, { createContext } from 'react';
import { AuthType, Dispatch, AuthProviderType } from './auth.types';

const initialState: AuthType = {
  user: undefined,
  token: undefined,
  roles: undefined,
  isSigningIn: false,
  isAuthenticated: true,
};

const AuthStateContext = createContext<AuthType | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

function authReducer(state: AuthType = initialState, action: any) {
  switch (action.type) {
    case 'SIGNIN': {
      return { ...state };
    }
    case 'SIGNIN_SUCCESS': {
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider({ children }: AuthProviderType) {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a Auth Provider');
  }
  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('appDispatch must be used within a Auth Provider');
  }
  return context;
}

export { AuthProvider, useAuthDispatch, useAuthState };
