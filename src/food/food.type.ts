import { FormikProps } from 'formik';
import { StringKeyObject } from 'common/common.types';

export interface AddCategoryFormProps {
  props: FormikProps<CategoryPayload>;
}

export interface CategoryPayload {
  title: string;
  description: string;
  promotionId?: number | string;
  featuredImage?: File;
  parentId?: number | string;
}

export interface CategoryAddPayload {
  dispatch: (args: StringKeyObject) => void;
  payload: CategoryPayload;
}
