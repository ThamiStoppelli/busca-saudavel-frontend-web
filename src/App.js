import React, { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Paths from "./routes";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
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
