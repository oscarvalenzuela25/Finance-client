import { Language } from "@/types/globals";
import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type AppConfigState = {
  theme: "light" | "dark";
  currentLanguage: Language;
  setTheme: (newTheme: "light" | "dark") => void;
  toggleTheme: () => void;
  setCurrentLanguage: (newLanguage: Language) => void;
};

const store: StateCreator<AppConfigState, [["zustand/immer", never]]> = (
  set
) => ({
  theme: "light",
  currentLanguage: "es",

  setTheme: (newTheme: "light" | "dark") => {
    set((state) => {
      state.theme = newTheme;
    });
  },
  toggleTheme: () => {
    set((state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    });
  },
  setCurrentLanguage: (newLanguage: Language) => {
    set((state) => {
      state.currentLanguage = newLanguage;
    });
  },
});

const appConfigStore = create<AppConfigState>()(
  persist(immer(store), {
    name: "app-config-store",
  })
);

export default appConfigStore;
