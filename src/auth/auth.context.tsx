import { storage } from 'app/app.storage';
import { StorageKey } from 'app/app.types';
import React, { createContext } from 'react';
import { Children, Dispatch } from 'common/common.types';

import { auth } from './auth-context.types';
import { AuthType, AuthState } from './auth.types';

const initialState: AuthType = {
  user: undefined,
  token: undefined,
  roles: undefined,
  isSigningIn: false,
  isAuthenticated: false,
  authState: AuthState.INITIAL,
};

const AuthStateContext = createContext<AuthType | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

function authReducer(state: AuthType = initialState, action: any) {
  switch (action.type) {
    case auth.SIGN_IN: {
      return { ...state, state: AuthState.AUTHENTICATING };
    }

    case auth.SIGN_IN_SUCCESS: {
      storage.set(StorageKey.AUTH, action.payload);
      return {
        ...state,
        isSigningIn: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        roles: action.payload.roles,
        authState: AuthState.AUTHENTICATED,
      };
    }

    case auth.SIGN_IN_FAILURE: {
      return { ...state, authState: AuthState.SIGN_IN_REJECTED, isAuthenticated: false };
    }

    case auth.SIGN_OUT: {
      return { ...state, authState: AuthState.LOGGING_OUT };
    }

    case auth.SIGN_OUT_SUCCESS: {
      storage.clear();
      return { ...state, isAuthenticated: false, authState: AuthState.LOGGED_OUT };
    }

    case auth.SIGN_OUT_FAILURE: {
      return { ...state, authState: AuthState.LOG_OUT_REJECTED };
    }

    case auth.PROFILE_COMPLETE: {
      return { ...state };
    }
    case auth.PROFILE_COMPLETE_SUCCESS: {
      return { ...state, user: action.payload.user };
    }
    case auth.PROFILE_COMPLETE_FAILURE: {
      return { ...state };
    }

    default: {
      return { ...state };
      // throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider({ children }: Children) {
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
