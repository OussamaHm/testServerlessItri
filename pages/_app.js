import {Fragment, useEffect} from "react";
import Head from "next/head";
import "./global.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { appWithTranslation } from 'next-i18next';

import Script from "next/script";
import ChatbotAI from "../components/ChatbotAI";
import {LanguageProvider} from "../components/LanguageContext";
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import ('bootstrap/dist/css/bootstrap.min.css');
        import ("slick-carousel/slick/slick.css");
        import ("slick-carousel/slick/slick-theme.css");


    }, []);
  return (
      <Fragment>

          <Head>
              <title>Itri Living</title>
              <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width"
              />

          </Head>
            <ChatbotAI/>

          <LanguageProvider>
              <Component {...pageProps} />

          </LanguageProvider>
      </Fragment>
  );
}

export default appWithTranslation(MyApp);
