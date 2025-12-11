import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is not undefined.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is undefined.
 * @throws {AssertionError} When the value is undefined.
 * @returns {asserts received is T} Narrows the value to a defined type.
 *
 * @example
 * assertDefined("something");
 */
export function assertDefined<T>(
  received: T,
  message?: string,
): asserts received is T {
  if (typeof received === "undefined") {
    throw new AssertionError({
      code: "NOT_DEFINED",
      message: message ?? "Expected value to be defined",
      received,
      expected: "defined",
    });
  }
}
