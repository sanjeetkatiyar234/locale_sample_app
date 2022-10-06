import React from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./navigation/router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
