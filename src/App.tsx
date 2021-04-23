import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";

import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
