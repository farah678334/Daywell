import { NextResponse } from "next/server";
import { createClient as createTokenClient } from "@supabase/supabase-js";
import { createClient as createCookieClient } from "@/lib/supabase/server";

// Call this at the start of any API route that needs a logged-in user.
// It returns { user, supabase, errorResponse }.
// If errorResponse is not null, the route must return it right away.
export async function requireUser(request) {
  const authHeader = request.headers.get("authorization");
  let supabase;
  let user = null;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Token sent in the request header (used for testing, for example with Postman)
    const token = authHeader.slice(7);
    supabase = createTokenClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        global: { headers: { Authorization: authHeader } },
        auth: { persistSession: false, autoRefreshToken: false },
      }
    );
    const { data } = await supabase.auth.getUser(token);
    user = data?.user ?? null;
  } else {
    // Normal case: the logged-in session from the browser cookies
    supabase = await createCookieClient();
    const { data } = await supabase.auth.getUser();
    user = data?.user ?? null;
  }

  if (!user) {
    return {
      user: null,
      supabase,
      errorResponse: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return { user, supabase, errorResponse: null };
}