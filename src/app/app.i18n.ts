import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from 'lang/index';

i18n.use(initReactI18next).init({
  whitelist: ['en'],
  ns: 'common',
  defaultNS: 'common',
  lng: 'en',
  fallbackLng: 'en',

  resources,
  react: {
    nsMode: 'default',
    useSuspense: false,
    wait: true,
  },
});
