import { ApiResponse } from 'api/api.types';
import { addCategory, getCategories, getMenus, postMenu } from 'api/request.api';

import { category, menu } from './food-context.types';
import { AddCategoryPayload, CategoryPayload, AddMenuPayload, MenuPayload } from './food.type';

type MenuKey = keyof MenuPayload;
type CategoryKeys = keyof CategoryPayload;

export const postCategory = async ({ dispatch, payload }: AddCategoryPayload): Promise<ApiResponse> => {
  dispatch({ type: category.ADD_CATEGORY });

  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    const k = key as CategoryKeys;
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

export const addMenu = async ({ dispatch, payload }: AddMenuPayload): Promise<ApiResponse> => {
  dispatch({ type: menu.ADD_MENU });

  const formData = new FormData();
  Object.keys(payload).forEach((key) => {
    const k = key as MenuKey;
    if (payload[k]) {
      formData.append(key, (payload as any)[k]);
    }
  });

  const { data, error } = await postMenu(formData);

  if (error) {
    dispatch({ type: menu.ADD_MENU_FAILURE });
  } else {
    dispatch({
      type: menu.ADD_MENU_SUCCESS,
      payload: { menu: data },
    });
  }

  return { data, error };
};
