import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translations/en.json';
import se from './translations/se.json';
import no from './translations/no.json';
import de from './translations/de.json';
import fr from './translations/fr.json';

const resources = {
  en: { translation: en },
  se: { translation: se },
  sv: { translation: se }, // Swedish can be detected as 'sv'
  no: { translation: no },
  nb: { translation: no }, // Norwegian Bokmål
  nn: { translation: no }, // Norwegian Nynorsk
  de: { translation: de },
  fr: { translation: fr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'se', 'sv', 'no', 'nb', 'nn', 'de', 'fr'],
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
