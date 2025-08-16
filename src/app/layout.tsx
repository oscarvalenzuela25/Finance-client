import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
import MuiProvider from "@/config/MuiProvider";
import ReactQueryProvider from "@/config/ReactQueryProvider";
import { publicSans } from "@/theme/fonts";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import { cookies } from "next/headers";
import { initI18nCore } from "@/translations";
import I18nProvider from "@/config/I18nProvider";
import { Language } from "@/types/globals";
import "./globals.css";

export const metadata: Metadata = {
  title: "Overview",
  description: "My Personal Finance App",
};

type Props = PropsWithChildren;

const RootLayout: FC<Props> = async ({ children }) => {
  const cookieStore = await cookies();
  const lng = (cookieStore.get("i18next")?.value as Language) ?? "es";
  initI18nCore(lng);

  return (
    <html lang={lng} className={publicSans.variable}>
      <body>
        <I18nProvider lng={lng}>
          <ReactQueryProvider>
            <MuiProvider>
              <Toaster position="bottom-right" richColors closeButton />
              <MainLayout>{children}</MainLayout>
            </MuiProvider>
          </ReactQueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
