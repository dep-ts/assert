import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a number.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a number.
 * @throws {AssertionError} When the value is not a number.
 * @returns {asserts received is number} Narrows the type to number.
 *
 * @example
 * assertNumber(42);
 */
export function assertNumber(
  received: unknown,
  message?: string,
): asserts received is number {
  if (typeof received !== "number") {
    throw new AssertionError({
      code: "NOT_NUMBER",
      message: message ?? "Expected value to be a number",
      received,
      expected: "number",
    });
  }
}
