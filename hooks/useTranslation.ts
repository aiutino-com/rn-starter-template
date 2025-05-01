/**
 * Custom hook to initialize and configure i18n (internationalization)
 * Supports English and Italian using expo-localization to detect the device language
 */

import i18n, { Resource } from 'i18next';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '@/locales/en.json';
import it from '@/locales/it.json';
import { TranslationKeys } from '@/locales/translationKeys';

// Explicitly typed resources (translation dictionaries)
const resources: Resource = {
    en: { translation: en },
    it: { translation: it },
};

// Init i18n if not already initialized
if (!i18n.isInitialized) {
    i18n.use(initReactI18next).init({
        resources,
        lng: Localization.locale.startsWith('it') ? 'it' : 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React handles escaping
        },
    });
}

// Typed wrapper hook to access translations throughout the app
export function useTranslation() {
    return useTranslationOrg<TranslationKeys>();
}
