import { AssertionError } from "@/core/utilities/error.ts";
import { assertObject } from "./object.ts";

/**
 * Asserts that the received value is a plain record object.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a record.
 * @throws {AssertionError} When the value is not a record.
 * @returns {asserts received is Record<PropertyKey, unknown>} Narrows the type to a record.
 *
 * @example
 * assertRecord({ key: 'value' });
 */
export function assertRecord(
  received: unknown,
  message: string = "Expected value to be a plain record object",
): asserts received is Record<PropertyKey, unknown> {
  assertObject(received, message);
  const proto = Object.getPrototypeOf(received);
  if (proto !== null && proto !== Object.prototype) {
    throw new AssertionError({
      code: "NOT_RECORD",
      message,
      received,
      expected: "record",
    });
  }
}
