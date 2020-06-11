import React from "react";

// custom SASS file
import "../styles/index.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// TODO: add our colors and such
const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
