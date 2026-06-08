import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Paths from "./routes";
import ScrollToTop from "./components/ScrollToTop";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />

        <ToastContainer
          className="toast-style"
          autoClose={4000}
          position="top-right"
        />

        <Paths />
      </BrowserRouter>
    </div>
  );
}

export default App;