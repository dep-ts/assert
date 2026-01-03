import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is an object (non-null, non-array).
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not an object.
 * @throws {AssertionError} When the value is not an object.
 * @returns {asserts received is object} Narrows the type to an object.
 *
 * @example
 * assertObject(new Date());
 */
export function assertObject(
  received: unknown,
  message?: string,
): asserts received is object {
  if (
    typeof received !== "object" ||
    received === null ||
    Array.isArray(received)
  ) {
    throw new AssertionError({
      code: "NOT_OBJECT",
      message: message ??
        "Expected value to be an object (non-null, non-array)",
      received,
      expected: "object",
    });
  }
}
