import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./translation/tr.json";
import en from "./translation/en.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      tr: {
        translation: tr,
      },

      en: {
        translation: en,
      },
    },
    lng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
