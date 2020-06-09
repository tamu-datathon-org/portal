import React from "react";
import "bootstrap/scss/bootstrap.scss"; // we should replace this with our own SASS file
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
