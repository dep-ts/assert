import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a boolean.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a boolean.
 * @throws {AssertionError} When the value is not a boolean.
 * @returns {asserts received is boolean} Narrows the type to boolean.
 *
 * @example
 * assertBoolean(true);
 */
export function assertBoolean(
  received: unknown,
  message?: string,
): asserts received is boolean {
  if (typeof received !== "boolean") {
    throw new AssertionError({
      code: "NOT_BOOLEAN",
      message: message ?? "Expected value to be a boolean",
      received,
      expected: "boolean",
    });
  }
}
