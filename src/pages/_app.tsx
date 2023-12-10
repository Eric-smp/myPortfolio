import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@/hooks/context/global";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";
import { ThemeProvider } from "styled-components";
import { Themes } from "@/styles/themeStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <ConfigProvider locale={ptBR}>
        <ThemeProvider theme={Themes}>
          <GlobalProvider>
            <Component {...pageProps} />;
          </GlobalProvider>
        </ThemeProvider>
      </ConfigProvider>
    </I18nextProvider>
  );
}
