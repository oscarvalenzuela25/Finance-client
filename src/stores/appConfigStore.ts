import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type AppConfigState = {
  theme: "light" | "dark";
  setTheme: (newTheme: "light" | "dark") => void;
};

const appConfigStore: StateCreator<
  AppConfigState,
  [["zustand/immer", never]]
> = (set) => ({
  theme: "light",

  setTheme: (newTheme: "light" | "dark") => {
    set((state) => {
      state.theme = newTheme;
    });
  },
});

const useAppConfigStore = create<AppConfigState>()(
  persist(immer(appConfigStore), {
    name: "app-config-store",
  })
);

export default useAppConfigStore;
