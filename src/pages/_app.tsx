import React from "react";
import "bootstrap/scss/bootstrap.scss"; // we should replace this with our own SASS file
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "../common/UserProvider";

// TODO: add our colors and such
const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
