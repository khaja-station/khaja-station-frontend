import { addCategory } from 'api/request.api';

import { category } from './food-context.types';
import { CategoryAddPayload } from './food.type';

export const postCategory = async ({ dispatch, payload }: CategoryAddPayload): Promise<void> => {
  dispatch({ type: category.ADD_CATEGORY });
  const { data, error } = await addCategory(payload);

  if (error) {
    dispatch({ type: category.ADD_CATEGORY_FAILURE });
  }

  dispatch({
    type: category.ADD_CATEGORY_SUCCESS,
    payload: { categories: data },
  });
};
