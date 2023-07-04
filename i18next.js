import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './src/locales/index.js';
import { statusState } from './src/context/index.js';

const { lng } = statusState;

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng,
    debug: true,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
