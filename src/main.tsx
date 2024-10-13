import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { randInt } from "./lib";
import { supabase } from "./supa";

(async () => {
  await supabase.auth.signInAnonymously();
  const userId = localStorage.userId ?? `${randInt(0, 1_000_000)}`;
  localStorage.userId = userId;

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <App userId={userId} />
    </BrowserRouter>
  );
})();
