/**
 * Validates req.body against a Zod schema. On success, replaces req.body
 * with the parsed (and coerced/trimmed) data. On failure, forwards a 400
 * with field-level error messages via the centralized error handler.
 */
export function validateBody(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    req.body = result.data;
    next();
  };
}
