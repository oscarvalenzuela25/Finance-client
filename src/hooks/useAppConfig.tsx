import useAppConfigStore from "@/stores/appConfigStore";

export const useGetTheme = () => useAppConfigStore((state) => state.theme);

export const useSetTheme = () => useAppConfigStore((state) => state.setTheme);
