import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a function.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a function.
 * @throws {AssertionError} When the value is not a function.
 * @returns {asserts received is (...args: unknown[]) => unknown} Narrows the type to a function.
 *
 * @example
 * assertFunction(() => 123);
 */
export function assertFunction(
  received: unknown,
  message?: string,
): asserts received is (...args: unknown[]) => unknown {
  if (typeof received !== "function") {
    throw new AssertionError({
      code: "NOT_FUNCTION",
      message: message ?? "Expected value to be a function",
      received,
      expected: "function",
    });
  }
}
