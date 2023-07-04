import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './src/locales/index.js';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'sp',
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
