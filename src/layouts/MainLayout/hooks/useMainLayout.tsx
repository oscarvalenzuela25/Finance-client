"use client";
import ArrowDownUpIcon from "@/icons/ArrowDownUpIcon";
import ChartDonutIcon from "@/icons/ChartDonutIcon";
import HouseIcon from "@/icons/HouseIcon";
import JarFillIcon from "@/icons/JarFillIcon";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const useMainLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSetIsMinimized = () => {
    setIsMinimized((prev) => !prev);
  };

  const menuItems = [
    {
      label: t("common:sections.overview"),
      icon: (
        <HouseIcon
          sx={{ color: pathname === "/" ? "green.main" : "inherit" }}
        />
      ),
      isMinimized,
      selected: pathname === "/",
      onClick: () => router.push("/"),
    },
    {
      label: t("common:sections.transactions"),
      icon: (
        <ArrowDownUpIcon
          sx={{
            color: pathname === "/transactions" ? "green.main" : "inherit",
          }}
        />
      ),
      isMinimized,
      selected: pathname === "/transactions",
      onClick: () => router.push("/transactions"),
    },
    {
      label: t("common:sections.budgets"),
      icon: (
        <ChartDonutIcon
          sx={{
            color: pathname === "/budgets" ? "green.main" : "inherit",
          }}
        />
      ),
      isMinimized,
      selected: pathname === "/budgets",
      onClick: () => router.push("/budgets"),
    },
    {
      label: t("common:sections.pots"),
      icon: (
        <JarFillIcon
          sx={{
            color: pathname === "/pots" ? "green.main" : "inherit",
          }}
        />
      ),
      isMinimized,
      selected: pathname === "/pots",
      onClick: () => router.push("/pots"),
    },
  ];
  return { menuItems, isMinimized, toggleSetIsMinimized };
};

export default useMainLayout;
