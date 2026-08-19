import { createClient } from "@supabase/supabase-js";
import { env } from "./env.js";

if (!env.supabaseUrl || !env.supabaseSecretKey) {
  throw new Error("SUPABASE_URL and SUPABASE_SECRET_KEY must be configured.");
}

// This client is server-only. The secret key bypasses RLS, so never send it
// to the browser or place it in a VITE_ environment variable.
export const supabase = createClient(env.supabaseUrl, env.supabaseSecretKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
