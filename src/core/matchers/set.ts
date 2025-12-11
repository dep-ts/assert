import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a Set instance.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a Set.
 * @throws {AssertionError} When the value is not a Set.
 * @returns {asserts received is Set<T>} Narrows the type to a Set.
 *
 * @example
 * assertSet(new Set([1, 2, 3]));
 */
export function assertSet<T>(
  received: unknown,
  message?: string,
): asserts received is Set<T> {
  if (!(received instanceof Set)) {
    throw new AssertionError({
      code: "NOT_SET",
      message: message ?? "Expected value to be a set",
      received,
      expected: "set",
    });
  }
}
