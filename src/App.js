import React, { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ToastProvider>
          <ThemeProvider theme={darkTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ToastProvider>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
