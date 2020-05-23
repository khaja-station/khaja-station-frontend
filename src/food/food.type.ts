import { FormikProps } from 'formik';

export interface AddCategoryFormProps {
  props: FormikProps<CategoryPayload>;
}

export interface CategoryPayload {
  title: string;
  description: string;
  promotionId?: number;
  featuredImage?: File;
  parentId?: number | string;
}
