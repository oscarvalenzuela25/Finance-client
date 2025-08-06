import type { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { Toaster } from "sonner";
import MuiProvider from "@/config/MuiProvider";
import ReactQueryProvider from "@/config/ReactQueryProvider";
import I18nProvider from "@/config/I18nProvider";
import { publicSans } from "@/theme/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance App",
  description: "My Per",
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
              {children}
            </MuiProvider>
          </ReactQueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
