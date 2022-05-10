import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import styledNormalize from "styled-normalize";

import { useStore } from "../utils/store";
import Layout from "../components/Layout";
import theme from "../utils/features/theme";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`;

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.state);
  const title = "Kaarwan";
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
