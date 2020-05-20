import authFrench from './fr/auth.json';
import authEnglish from './en/auth.json';
import commonEnglish from './en/common.json';

export const resources = {
  en: {
    translation: {
      common: { ...commonEnglish },
      auth: { ...authEnglish },
    },
  },
  fr: {
    translation: {
      auth: { ...authFrench },
    },
  },
};
