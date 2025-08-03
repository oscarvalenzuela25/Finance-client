"use client";

import { I18nextProvider } from "react-i18next";
import initI18n from "@/translations";
import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren;

const I18nProvider: FC<Props> = ({ children }) => {
  const i18n = initI18n();
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;
