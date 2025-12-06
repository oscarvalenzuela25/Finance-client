import i18n from "i18next";
import esCommon from "./es/common.json";
import esOverview from "./es/overview.json";
import esPots from "./es/pots.json";
import esTransactions from "./es/transactions.json";
import esBudgets from "./es/budgets.json";

import enCommon from "./en/common.json";
import enOverview from "./en/overview.json";
import enPots from "./en/pots.json";
import enTransactions from "./en/transactions.json";
import enBudgets from "./en/budgets.json";

import { Language } from "@/types/globals";

let initialized = false;

export const initI18nCore = (lng?: Language) => {
  if (!initialized) {
    i18n.init({
      resources: {
        es: {
          common: esCommon,
          overview: esOverview,
          pots: esPots,
          transactions: esTransactions,
          budgets: esBudgets,
        },
        en: {
          common: enCommon,
          overview: enOverview,
          pots: enPots,
          transactions: enTransactions,
          budgets: enBudgets,
        },
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
