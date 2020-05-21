import authFrench from './fr/auth.json';
import authEnglish from './en/auth.json';
import errorEnglish from './en/errors.json';
import commonEnglish from './en/common.json';

export const resources = {
  en: {
    translation: {
      auth: { ...authEnglish },
      errors: { ...errorEnglish },
      common: { ...commonEnglish },
    },
  },
  fr: {
    translation: {
      auth: { ...authFrench },
    },
  },
};
