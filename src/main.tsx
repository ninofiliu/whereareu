import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              home
              <Link to="/1-123456789">weird</Link>
            </>
          }
        />
        <Route
          path="/1-123456789"
          element={
            <>
              weird
              <Link to="/">home</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
