import {
  useGetCurrentLanguage,
  useSetCurrentLanguage,
} from "@/hooks/useAppConfig";
import useChangeLanguage from "@/hooks/useChangeLanguage";
import { Language } from "@/types/globals";
import { MenuItem, Select } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageController = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language as Language;
  const { setLanguage } = useChangeLanguage();
  const currentLanguage = useGetCurrentLanguage();
  const setCurrentLanguage = useSetCurrentLanguage();

  const languageOptions = [
    {
      label: t("common:languages.english"),
      value: "en",
    },
    {
      label: t("common:languages.spanish"),
      value: "es",
    },
  ];

  useEffect(() => {
    if (language !== currentLanguage) setLanguage(currentLanguage);
  }, [currentLanguage, language, setLanguage]);

  return (
    <Select
      value={currentLanguage}
      onChange={(e) => setCurrentLanguage(e.target.value)}
      variant="standard"
      sx={{
        marginRight: 2,
      }}
    >
      {languageOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageController;
