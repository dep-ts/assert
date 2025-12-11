import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a RegExp instance.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a RegExp.
 * @throws {AssertionError} When the value is not a RegExp.
 * @returns {asserts received is RegExp} Narrows the type to a RegExp.
 *
 * @example
 * assertRegExp(/test/);
 */
export function assertRegExp(
  received: unknown,
  message?: string,
): asserts received is RegExp {
  if (!(received instanceof RegExp)) {
    throw new AssertionError({
      code: "NOT_REG_EXP",
      message: message ?? "Expected value to be a regexp",
      received,
      expected: "regexp",
    });
  }
}
