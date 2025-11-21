import i18n from "i18next";
import esCommon from "./es/common.json";
import esOverview from "./es/overview.json";
import esPots from "./es/pots.json";

import enCommon from "./en/common.json";
import enOverview from "./en/overview.json";
import enPots from "./en/pots.json";

import { Language } from "@/types/globals";

let initialized = false;

export const initI18nCore = (lng?: Language) => {
  if (!initialized) {
    i18n.init({
      resources: {
        es: { common: esCommon, overview: esOverview, pots: esPots },
        en: { common: enCommon, overview: enOverview, pots: enPots },
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
