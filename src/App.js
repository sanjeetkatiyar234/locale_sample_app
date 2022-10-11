import React from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./navigation/router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { ToastProvider } from "./hooks/ToastContext";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <ThemeProvider theme={darkTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ToastProvider>
    </Provider>
  );
}

export default App;
