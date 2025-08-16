"use client";
import { Language } from "@/types/globals";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

const useChangeLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const setLanguage = (lng: Language) => {
    i18n.changeLanguage(lng);
    document.cookie = `i18next=${lng}; path=/; max-age=${60 * 60 * 24 * 365}`;
    router.refresh();
  };

  return {
    setLanguage,
  };
};

export default useChangeLanguage;
