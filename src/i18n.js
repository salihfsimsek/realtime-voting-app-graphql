import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

//Resources
import translationEN from './locales/en/translation.json';
import translationTR from './locales/tr/translation.json';

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: localStorage.getItem('language') || 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: translationEN
            },
            tr: {
                translation: translationTR
            }
        }
    });


export default i18n;