import * as Yup from 'yup';

// FIXME: place in language file

const INVALID_EMAIL = 'Email is invalid';
const REQUIRED_FIELD = 'Field is required';
const INVALID_PASSWORD_LENGTH = 'Invalid password length';
const PASSWORD_MATCH = 'Password does not match';
const PASSWORD_ERROR =
  'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character';

export const loginValidationSchema = Yup.object({
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
  password: Yup.string()
    .min(8, INVALID_PASSWORD_LENGTH)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, PASSWORD_ERROR)
    .required(REQUIRED_FIELD),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required(REQUIRED_FIELD),
  email: Yup.string().email(INVALID_EMAIL).required(REQUIRED_FIELD),
  password: Yup.string()
    .min(8, INVALID_PASSWORD_LENGTH)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, PASSWORD_ERROR)
    .required(REQUIRED_FIELD),
  confirmPassword: Yup.string()
    .required(REQUIRED_FIELD)
    .oneOf([Yup.ref('password'), null], PASSWORD_MATCH),
});
