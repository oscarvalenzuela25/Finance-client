import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren, ReactNode } from "react";
import {
  render,
  type RenderOptions,
  renderHook as renderHookLib,
} from "@testing-library/react";
import axios from "axios";
import theme from "@/theme";

export const i18nMocked = () => {
  vi.mock("react-i18next", () => ({
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
  }));
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

const wrapperApp = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst enableCssLayer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  </QueryClientProvider>
);

export const renderApp = (children: ReactNode, options: RenderOptions) =>
  render(wrapperApp({ children }), { ...options });

export const renderHook = <Result,>(hook: () => Result) =>
  renderHookLib(hook, { wrapper: wrapperApp });

export const mockGet = vi.spyOn(axios, "get");
export const mockPost = vi.spyOn(axios, "post");
export const mockPut = vi.spyOn(axios, "put");
export const mockDelete = vi.spyOn(axios, "delete");
export const mockPatch = vi.spyOn(axios, "patch");
export const mockAxiosError = vi.spyOn(axios, "isAxiosError");
