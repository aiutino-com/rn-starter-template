import 'i18next';
import { TranslationKeys } from '@/locales/translationKeys';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: Record<TranslationKeys, string>;
    }
}
