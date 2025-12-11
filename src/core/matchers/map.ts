import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a Map instance.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a Map.
 * @throws {AssertionError} When the value is not a Map.
 * @returns {asserts received is Map<K, V>} Narrows the type to a Map.
 *
 * @example
 * assertMap(new Map());
 */
export function assertMap<K, V>(
  received: unknown,
  message?: string,
): asserts received is Map<K, V> {
  if (!(received instanceof Map)) {
    throw new AssertionError({
      code: "NOT_MAP",
      message: message ?? "Expected value to be a map",
      received,
      expected: "map",
    });
  }
}
