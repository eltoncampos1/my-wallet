import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { Layout } from "./components/Layout";
import dark from "./styles/themes/dark";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
