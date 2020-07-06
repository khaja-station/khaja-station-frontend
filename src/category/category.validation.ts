import * as Yup from 'yup';
import validation from 'lang/en/validation.json';

const FILE_SIZE = 5242880;

export const categoryValidationSchema = Yup.object({
  promotionId: Yup.string(),
  featuredImage: Yup.mixed().test('fileSize', 'File Size is too large', (value) => value.size <= FILE_SIZE),
  name: Yup.string().required(validation.REQUIRED_FIELD),
  description: Yup.string().required(validation.REQUIRED_FIELD),
});
