import { createClient } from "@/lib/supabase/server";
import { ApiError } from "./errors";

export async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new ApiError("Unauthorized", 401);
  }

  return { supabase, user };
}