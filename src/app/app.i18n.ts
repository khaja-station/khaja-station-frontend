import i18n from 'i18next';
import { resources } from 'lang/index';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
    wait: true,
  },
});
