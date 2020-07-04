import { FormikProps } from 'formik';
import { StringKeyObject } from 'common/common.types';

export interface AddCategoryFormProps {
  props: FormikProps<CategoryPayload>;
}

export interface CategoryPayload {
  name: string;
  description: string;
  promotionId?: number | string;
  featuredImage?: File;
  parentId?: number | string;
}

export interface AddCategoryPayload {
  dispatch: (args: StringKeyObject) => void;
  payload: CategoryPayload;
}
