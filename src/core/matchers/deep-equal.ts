import { AssertionError } from "@/core/utilities/error.ts";
import { format } from "@/private/format.ts";

/**@private */
function isDeepEqual(a: unknown, b: unknown): boolean {
  // Quick check for same reference or primitives
  if (Object.is(a, b)) return true;

  // Handle null/undefined mismatches
  if (a == null || b == null) return false;

  // Type mismatch - but careful with objects
  if (typeof a !== typeof b) return false;

  // Date
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }
  if (a instanceof Date || b instanceof Date) return false;

  // RegExp
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }
  if (a instanceof RegExp || b instanceof RegExp) return false;

  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((val, i) => isDeepEqual(val, b[i]));
  }
  if (Array.isArray(a) || Array.isArray(b)) return false;

  // Maps
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a) {
      if (!b.has(key) || !isDeepEqual(val, b.get(key))) return false;
    }
    return true;
  }
  if (a instanceof Map || b instanceof Map) return false;

  // Sets
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const val of a) {
      if (!b.has(val)) return false;
    }
    return true;
  }
  if (a instanceof Set || b instanceof Set) return false;

  // Plain objects
  if (typeof a === "object" && typeof b === "object" && a && b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(
      (key) =>
        Object.hasOwn(b, key) &&
        isDeepEqual(
          (a as Record<string, unknown>)[key],
          (b as Record<string, unknown>)[key],
        ),
    );
  }

  // Catch-all for any other cases (functions, class instances, etc.)
  return false;
}

/**
 * Asserts that two values are deeply equal.
 *
 * @param received - Value being validated.
 * @param expected - Value to compare against.
 * @param message - Error message used when values differ.
 * @throws {AssertionError} When the values are not deeply equal.
 * @returns {asserts received is T} Narrows the received value to the expected type.
 *
 * @example
 * assertDeepEqual({ a: 1 }, { a: 1 });
 */
export function assertDeepEqual<T>(
  received: unknown,
  expected: T,
  message?: string,
): asserts received is T {
  if (!isDeepEqual(received, expected)) {
    throw new AssertionError({
      code: "NOT_DEEP_EQUAL",
      message: message ??
        `Expected deep equal ${format(received)}, but got ${format(expected)}`,
      expected,
      received,
    });
  }
}
