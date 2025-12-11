import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a plain object.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a plain object.
 * @throws {AssertionError} When the value is not a plain object.
 * @returns {asserts received is object} Narrows the type to a plain object.
 *
 * @example
 * assertObject({ a: 1 });
 */
export function assertObject(
  received: unknown,
  message?: string,
): asserts received is object {
  if (Object.prototype.toString.call(received) !== "[object Object]") {
    throw new AssertionError({
      code: "NOT_OBJECT",
      message: message ?? "Expected value to be an object",
      received,
      expected: "object",
    });
  }
}
