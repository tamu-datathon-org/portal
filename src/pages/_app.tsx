import React from "react";

// custom SASS file
import "../styles/index.scss";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "../common/UserProvider";

import { THEMES } from "../styles/theme.config";

// import constants from Theme configuration
const theme = THEMES.PrimaryTheme;

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
