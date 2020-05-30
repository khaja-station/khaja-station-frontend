import { auth } from './auth-context.types';
import { restaurantLogin } from 'api/request.api';
import { LoginServicePayload } from './auth.types';

export const login = async ({ dispatch, payload }: LoginServicePayload): Promise<void> => {
  dispatch({ type: auth.SIGN_IN });
  const { data, error } = await restaurantLogin(payload);

  if (error) {
    dispatch({ type: auth.SIGN_IN_FAILURE });
  }

  dispatch({
    type: auth.SIGN_IN_SUCCESS,
    payload: { user: data.user, token: data.token, roles: data.roles },
  });
};
