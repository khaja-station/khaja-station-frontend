import { LoginPayload } from './auth.types';
import { auth } from './auth-context.types';
import { StringKeyObject } from 'app/app.types';
import { restaurantLogin } from 'api/request.api';

export interface LoginServicePayload {
  dispatch: (args: StringKeyObject) => void;
  payload: LoginPayload;
}
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
