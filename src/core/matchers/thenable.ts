import { AssertionError } from "@/core/utilities/error.ts";
import { assertFunction } from "./function.ts";
import { assertObject } from "./object.ts";

/**
 * Asserts that the received value is a thenable (i.e., has a `then` method).
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not thenable.
 * @throws {AssertionError} When the value is not a thenable.
 * @returns {asserts received is PromiseLike<T>} Narrows the type to a Promise-like value.
 *
 * @example
 * assertThenable(Promise.resolve(1));
 */
export function assertThenable<T>(
  received: unknown,
  message?: string,
): asserts received is PromiseLike<T> {
  assertObject(received, message);

  if (!("then" in received)) {
    throw new AssertionError({
      code: "NOT_THENABLE",
      message: message ?? "Expected value to be thenable",
      received,
      expected: "thenable",
    });
  }

  assertFunction(received.then, message);
}
