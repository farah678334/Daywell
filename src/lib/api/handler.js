import { ZodError } from "zod";
import { ApiError } from "./errors";
import { fail } from "./response";

export function withErrorHandling(handler) {
  return async (...args) => {
    try {
      return await handler(...args);
    } catch (e) {
      if (e instanceof ApiError) return fail(e.message, e.status);
      if (e instanceof ZodError) return fail(e.issues[0].message, 400);

      console.error(e);
      return fail("Internal server error", 500);
    }
  };
}