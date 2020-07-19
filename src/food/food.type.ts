import { FormikProps } from 'formik';
import { StringKeyObject } from 'common/common.types';

export interface AddCategoryFormProps {
  props: FormikProps<CategoryPayload>;
}

export interface CategoryPayload {
  id?: number | string;
  name: string;
  description: string;
  promotionId?: number | string;
  featuredImage?: File;
  parentId?: number | string;
}

export interface Categories {
  paging: number | null;
  result: CategoryPayload[];
}
export interface Menus {
  paging: number | null;
  result: MenuPayload[];
}

export interface AddCategoryPayload {
  dispatch: (args: StringKeyObject) => void;
  payload: CategoryPayload;
}

export interface MenuPayload {
  name: string;
  description: string;
  featuredImage?: File;
}

export interface AddMenuFormProps {
  props: FormikProps<MenuPayload>;
}

export interface AddMenuPayload {
  dispatch: (args: StringKeyObject) => void;
  payload: MenuPayload;
}

export type Dispatch = (args: StringKeyObject) => void;

export interface FoodItemPayload {
  name: string;
  price: number;
  menuId: string;
  nickName: string;
  discount: number;
  description: string;
  promotionId?: string;
  categories: string[];
  featuredImage?: File | string;
}
export interface AddFoodItemFormProps {
  props: FormikProps<FoodItemPayload>;
}

export interface FoodPreviewProps {
  food: FoodItemPayload;
}
