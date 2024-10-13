import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Credits } from "./Credits";
import { Level0 } from "./levels/1/Level1";
import { Level2 } from "./levels/2/Level2";
import { Level3 } from "./levels/3/Level3";
import { Level4 } from "./levels/4/Level4";
import { Level5 } from "./levels/5/Level5";
import { Level6 } from "./levels/6/Level6";
import { Level7 } from "./levels/7/Level7";
import { Level8 } from "./levels/8/Level8";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="/level1" />} />
      <Route path="/level1" element={<Level0 />} />
      <Route path="/level2" element={<Level2 />} />
      <Route path="/level3" element={<Level3 />} />
      <Route path="/level4" element={<Level4 />} />
      <Route path="/level5" element={<Level5 />} />
      <Route path="/level6" element={<Level6 />} />
      <Route path="/level7" element={<Level7 />} />
      <Route path="/level8" element={<Level8 />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  </BrowserRouter>
);
