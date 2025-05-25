import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Arabic
import arHeader from './locales/header/ar.json';
import arHero from './locales/hero/ar.json';
import arFeatures from './locales/features/ar.json';
import arDemo from './locales/demo/ar.json';
import arCta from './locales/cta/ar.json';
import arFooter from './locales/footer/ar.json';

// English
import enHeader from './locales/header/en.json';
import enHero from './locales/hero/en.json';
import enFeatures from './locales/features/en.json';
import enDemo from './locales/demo/en.json';
import enCta from './locales/cta/en.json';
import enFooter from './locales/footer/en.json';

// Chinese
import zhHeader from './locales/header/zh.json';
import zhHero from './locales/hero/zh.json';
import zhFeatures from './locales/features/zh.json';
import zhDemo from './locales/demo/zh.json';
import zhCta from './locales/cta/zh.json';
import zhFooter from './locales/footer/zh.json';

// Spanish
import esHeader from './locales/header/es.json';
import esHero from './locales/hero/es.json';
import esFeatures from './locales/features/es.json';
import esDemo from './locales/demo/es.json';
import esCta from './locales/cta/es.json';
import esFooter from './locales/footer/es.json';

// Portuguese
import ptHeader from './locales/header/pt.json';
import ptHero from './locales/hero/pt.json';
import ptFeatures from './locales/features/pt.json';
import ptDemo from './locales/demo/pt.json';
import ptCta from './locales/cta/pt.json';
import ptFooter from './locales/footer/pt.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        header: arHeader,
        hero: arHero,
        features: arFeatures,
        demo: arDemo,
        cta: arCta,
        footer: arFooter,
      },
      en: {
        header: enHeader,
        hero: enHero,
        features: enFeatures,
        demo: enDemo,
        cta: enCta,
        footer: enFooter,
      },
      zh: {
        header: zhHeader,
        hero: zhHero,
        features: zhFeatures,
        demo: zhDemo,
        cta: zhCta,
        footer: zhFooter,
      },
      es: {
        header: esHeader,
        hero: esHero,
        features: esFeatures,
        demo: esDemo,
        cta: esCta,
        footer: esFooter,
      },
      pt: {
        header: ptHeader,
        hero: ptHero,
        features: ptFeatures,
        demo: ptDemo,
        cta: ptCta,
        footer: ptFooter,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback to English
    ns: ['header', 'hero', 'features', 'demo', 'cta', 'footer'],
    defaultNS: 'header',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
