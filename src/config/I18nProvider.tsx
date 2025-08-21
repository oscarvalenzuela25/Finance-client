"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n, { initI18nCore } from "@/translations";
import { Language } from "@/types/globals";

type Props = {
  lng: Language;
} & PropsWithChildren;

let adaptedToReact = false;

const I18nProvider: FC<Props> = ({ lng, children }) => {
  initI18nCore(lng);

  if (!adaptedToReact) {
    i18n.use(initReactI18next);
    adaptedToReact = true;
  }

  useEffect(() => {
    document.documentElement.lang = lng;
  }, [lng]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
