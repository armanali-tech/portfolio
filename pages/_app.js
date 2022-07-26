import React, { useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import styledNormalize from "styled-normalize";
import { useStore } from "../utils/store";
import Layout from "../components/layout";
import theme from "../utils/features/theme";
import "../styles/css/global.css";

const GlobalStyle = createGlobalStyle`${styledNormalize}`;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.state);
  const title = "Profile";

  function loadScript(src) {
    // script to solve windows not defined issue
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  useEffect(() => {
    loadScript;
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </>
  );
}
