import * as Yup from 'yup';

// FIXME: place in language file

const INVALID_EMAIL = 'Email is invalid';
const REQUIRED_FIELD = 'Field is required';
const INVALID_PASSWORD_LENGTH = 'Invalid password length';

export const loginValidationSchema = Yup.object({
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
  password: Yup.string().min(8, INVALID_PASSWORD_LENGTH).required(REQUIRED_FIELD),
});
