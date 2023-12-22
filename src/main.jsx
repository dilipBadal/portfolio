import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
// import store from "./redux/store.js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    body: "Poppins, Montserrat, sans-serif",
    heading: "Poppins, Montserrat, sans-serif",
  },
  colors: {
    primary: "#212121",
    secondary: "#EEE",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/homepage" element={<App />} />
        </Routes>
      </Router>
    </ChakraProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
