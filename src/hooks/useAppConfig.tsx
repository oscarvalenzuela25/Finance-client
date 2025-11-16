import appConfigStore from "@/stores/appConfigStore";

export const useGetTheme = () => appConfigStore((state) => state.theme);
export const useSetTheme = () => appConfigStore((state) => state.setTheme);
export const useToggleTheme = () =>
  appConfigStore((state) => state.toggleTheme);

export const useGetCurrentLanguage = () =>
  appConfigStore((state) => state.currentLanguage);
export const useSetCurrentLanguage = () =>
  appConfigStore((state) => state.setCurrentLanguage);
