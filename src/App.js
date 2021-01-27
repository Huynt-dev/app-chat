import React, { useEffect } from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import store from "./store";
import { socketListener } from "./configs/socket";

function App() {
  useEffect(() => {
    console.log("render");
    socketListener(store);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
