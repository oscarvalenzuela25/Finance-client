"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import esCommon from "./es/common.json";
import enCommon from "./en/common.json";

let initialized = false;

const initI18n = () => {
  if (!initialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          es: { common: esCommon },
          en: { common: enCommon },
        },
        fallbackLng: "es",
        supportedLngs: ["es", "en"],
        defaultNS: "common",
        detection: {
          order: ["querystring", "cookie", "localStorage", "navigator"],
          caches: ["localStorage", "cookie"],
        },
        react: { useSuspense: false },
      });

    i18n.on("languageChanged", (lng) => {
      if (typeof document !== "undefined") document.documentElement.lang = lng;
    });

    initialized = true;
  }
  return i18n;
};

export default initI18n;
