import { storage } from 'app/app.storage';
import { auth } from './auth-context.types';
import { restaurantLogin, logout, completeSignup } from 'api/request.api';
import { LoginServicePayload, ProfileServicePayload } from './auth.types';

export const login = async ({ dispatch, payload }: LoginServicePayload): Promise<void> => {
  dispatch({ type: auth.SIGN_IN });
  const { data, error } = await restaurantLogin(payload);
  if (error) {
    storage.clear();
    dispatch({ type: auth.SIGN_IN_FAILURE });
  } else {
    dispatch({
      type: auth.SIGN_IN_SUCCESS,
      payload: { user: data.user, token: data.token, roles: data.roles },
    });
  }
};

export const signout = async (dispatch: any): Promise<void> => {
  dispatch({ type: auth.SIGN_OUT });
  const { error } = await logout();

  if (error) {
    dispatch({ type: auth.SIGN_OUT_FAILURE });
  } else {
    dispatch({
      type: auth.SIGN_OUT_SUCCESS,
    });
  }
};

export const completeProfile = async ({ dispatch, payload }: ProfileServicePayload): Promise<void> => {
  dispatch({ type: auth.PROFILE_COMPLETE });
  const { error, data } = await completeSignup(payload);

  if (error) {
    dispatch({ type: auth.PROFILE_COMPLETE_FAILURE });
  } else {
    dispatch({
      type: auth.PROFILE_COMPLETE_SUCCESS,
      payload: { user: data },
    });
  }
};
