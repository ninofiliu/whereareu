import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Level0 } from "./levels/1/Level1";
import { Level2 } from "./levels/2/Level2";
import { Level3 } from "./levels/3/Level3";
import { Level4 } from "./levels/4/Level4";
import { Level5 } from "./levels/5/Level5";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="/level1" />} />
      <Route path="/level1" element={<Level0 />} />
      <Route path="/level2" element={<Level2 />} />
      <Route path="/level3" element={<Level3 />} />
      <Route path="/level4" element={<Level4 />} />
      <Route path="/level5" element={<Level5 />} />
    </Routes>
  </BrowserRouter>
);
