import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Level0 } from "./levels/1/Level1";
import { Level2 } from "./levels/2/Level2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/level1" />} />
        <Route path="/level1" element={<Level0 />} />
        <Route path="/level2" element={<Level2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
