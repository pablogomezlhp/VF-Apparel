import React from 'react'

import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;