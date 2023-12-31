import type { AppProps } from "next/app";
import { GlobalProvider } from "@/hooks/context/global";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { ThemeProvider } from "styled-components";
import { Themes } from "@/styles/themeStyles";
import { GlobalStyles } from "@/styles/globals";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio | Eric Sampaio - Developer Front-end</title>
        <link rel="icon" href="/faviacon.ico" sizes="any" />
      </Head>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={Themes}>
          <GlobalProvider>
            <GlobalStyles />
            <Component {...pageProps} />
          </GlobalProvider>
        </ThemeProvider>
      </I18nextProvider>
    </>
  );
}
