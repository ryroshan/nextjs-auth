// i18n.ts
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en', // Set your default language here
  otherLanguages: ['es'], // Add other supported languages here
  localeSubpaths: 'all',
});

export const {
  appWithTranslation,
  useTranslation,
  withTranslation,
  i18n,
} = NextI18NextInstance;
