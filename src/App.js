import React, { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import router from "./navigation/router";
import { Provider } from "react-redux";
import { createAppStore } from "./app/store";
import "./App.css";
import { ToastProvider } from "./hooks/ToastContext";
import useToast from "hooks/useToast";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const toast = useToast();
  const store = useMemo(() => createAppStore(undefined, { toast }), [toast]);

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
