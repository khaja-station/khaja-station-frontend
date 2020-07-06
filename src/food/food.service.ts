import { ApiResponse } from 'api/api.types';
import { addCategory, getCategories, getMenus } from 'api/request.api';

import { category } from './food-context.types';
import { AddCategoryPayload, CategoryPayload } from './food.type';

type KeyType = keyof CategoryPayload;

export const postCategory = async ({ dispatch, payload }: AddCategoryPayload): Promise<ApiResponse> => {
  dispatch({ type: category.ADD_CATEGORY });

  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    const k = key as KeyType;
    if (payload[k]) {
      formData.append(key, (payload as any)[k]);
    }
  });

  const { data, error } = await addCategory(formData);

  if (error) {
    dispatch({ type: category.ADD_CATEGORY_FAILURE });
  } else {
    dispatch({
      type: category.ADD_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  }

  return { data, error };
};

export const fetchCategories = async (dispatch: any): Promise<ApiResponse> => {
  dispatch({ type: category.ADD_CATEGORIES });
  const { data, error } = await getCategories();
  if (error) {
    dispatch({ type: category.ADD_CATEGORIES_FAILURE });
  } else {
    dispatch({
      type: category.ADD_CATEGORIES_SUCCESS,
      payload: { categories: data },
    });
  }
  return { data, error };
};

export const fetchMenus = async (): Promise<ApiResponse> => {
  const { data, error } = await getMenus();
  return { data, error };
};
