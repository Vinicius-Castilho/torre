import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    fallbackLng: 'pt',
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

// ESCUTA A MUDANÇA DE IDIOMA E ATUALIZA O HTML (FORA DE UM USEEFFECT)
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
});

// DEFINE O IDIOMA INICIAL ASSIM QUE O ARQUIVO É CARREGADO
document.documentElement.setAttribute('lang', i18n.language || 'pt');

export default i18n;