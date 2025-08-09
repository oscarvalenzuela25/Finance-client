import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
import MuiProvider from "@/config/MuiProvider";
import ReactQueryProvider from "@/config/ReactQueryProvider";
import I18nProvider from "@/config/I18nProvider";
import { publicSans } from "@/theme/fonts";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout/MainLayout";

export const metadata: Metadata = {
  title: "Overview",
  description: "My Personal Finance App",
};

type Props = PropsWithChildren;

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="es" className={publicSans.variable}>
      <body>
        <I18nProvider>
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
