import { createClient } from "@supabase/supabase-js";

import { Database } from "./database.types";

export const supabase = createClient<Database>(
  "https://lbsoljfiejhkizfspfvy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxic29samZpZWpoa2l6ZnNwZnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTk5ODMsImV4cCI6MjA0NDM5NTk4M30.H2JbcO9_Kkk0kBA4GA8ScPjaMBt4osSRVLgFq4-lSYo"
);
