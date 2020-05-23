import * as Yup from 'yup';
import validation from 'lang/en/validation.json';

export const categoryValidationSchema = Yup.object({
  promotionId: Yup.string(),
  featuredImage: Yup.mixed(),
  title: Yup.string().required(validation.REQUIRED_FIELD),
  description: Yup.string().required(validation.REQUIRED_FIELD),
});
