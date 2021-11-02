// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import { ThemeProvider, Theme, StyledEngineProvider, createTheme } from '@mui/material/styles';
import createCache from "@emotion/cache";
import getConfig from "next/config";
import {CacheProvider} from "@emotion/react";
import "@utrecht/design-tokens/dist/index.css";
import {useEffect} from "react";

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const cache = createCache({
  key: 'my-prefix-key',
  nonce: publicRuntimeConfig.nonce,
  prepend: true,
});

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    import("@utrecht/web-component-library-stencil/dist/utrecht/utrecht.esm.js");
  }, []);

  return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;


