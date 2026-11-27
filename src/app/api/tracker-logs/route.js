import { z } from "zod";
import { requireUser } from "@/lib/api/auth";
import { ok } from "@/lib/api/response";
import { withErrorHandling } from "@/lib/api/handler";

const schema = z.object({
  date: z.string(),
  energy_level: z.number().min(1).max(10),
  notes: z.string().optional(),
});

export const GET = withErrorHandling(async () => {
  const { supabase, user } = await requireUser();

  const { data, error } = await supabase
    .from("tracker_logs")
    .select("*")
    .eq("user_id", user.id)
    .order("date", { ascending: false });

  if (error) throw error;
  return ok(data);
});

export const POST = withErrorHandling(async (req) => {
  const { supabase, user } = await requireUser();
  const body = schema.parse(await req.json());

  const { data, error } = await supabase
    .from("tracker_logs")
    .insert({ ...body, user_id: user.id })
    .select()
    .single();

  if (error) throw error;
  return ok(data, 201);
});