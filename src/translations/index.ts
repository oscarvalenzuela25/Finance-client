import i18n from "i18next";
import esCommon from "./es/common.json";
import enCommon from "./en/common.json";
import { Language } from "@/types/globals";

let initialized = false;

export const initI18nCore = (lng?: Language) => {
  if (!initialized) {
    i18n.init({
      resources: {
        es: { common: esCommon },
        en: { common: enCommon },
      },
      fallbackLng: "es",
      supportedLngs: ["es", "en"],
      defaultNS: "common",
      lng,
    });
    initialized = true;
  } else if (lng && i18n.language !== lng) {
    i18n.changeLanguage(lng);
  }
  return i18n;
};

export default i18n;
