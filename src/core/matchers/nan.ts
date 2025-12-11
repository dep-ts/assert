import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is NaN.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not NaN.
 * @throws {AssertionError} When the value is not NaN.
 * @returns {asserts received is number} Narrows the type to a number.
 *
 * @example
 * assertNaN(NaN);
 */
export function assertNaN(
  received: unknown,
  message?: string,
): asserts received is number {
  if (!Number.isNaN(received)) {
    throw new AssertionError({
      code: "NOT_NAN",
      message: message ?? "Expected value to be NaN",
      received,
      expected: NaN,
    });
  }
}
