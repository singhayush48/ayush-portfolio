import { supabase } from "../config/supabase.js";

function throwDatabaseError(error) {
  if (!error) return;
  const err = new Error(error.message);
  err.status = 500;
  throw err;
}

export async function listProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });

  throwDatabaseError(error);
  return data;
}

export async function getProjectBySlug(slug) {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  throwDatabaseError(error);
  return data;
}
