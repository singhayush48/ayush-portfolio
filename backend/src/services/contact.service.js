import { supabase } from "../config/supabase.js";

export async function createContactMessage({ name, email, message }) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert({ name, email, message })
    .select("id")
    .single();

  if (error) {
    const err = new Error(error.message);
    err.status = 500;
    throw err;
  }

  return data;
}
