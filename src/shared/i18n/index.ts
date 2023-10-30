import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

export const i18next = i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    // resources: {
    //   en: {
    //     translation: {
    //       SignIn: 'Sign in',
    //       Submit: 'Submit',
    //       Login: 'Login',
    //       Password: 'Password',
    //       'Type login and password': 'Type login and password',
    //       ru: 'Change to english',
    //       en: 'Change to russian',
    //     },
    //   },
    //   ru: {
    //     translation: {
    //       SignIn: 'Войти',
    //       Submit: 'Отправить',
    //       Password: 'Пароль',
    //       Login: 'Логин',
    //       'Type login and password': 'Введите пароль и логин',
    //       ru: 'Переключить на английский',
    //       en: 'Переключить на русский',
    //     },
    //   },
    // },

    fallbackLng: 'en',
    // ns

    interpolation: {
      escapeValue: false,
    },
  });
