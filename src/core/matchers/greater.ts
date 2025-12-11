import { AssertionError } from "@/core/utilities/error.ts";
import { assertAnyOf } from "@/core/utilities/any.ts";
import { assertNumber } from "./number.ts";
import { assertBigint } from "./bigint.ts";

/**
 * Asserts that the received value is greater than the expected value.
 *
 * @param received - Value being validated.
 * @param expected - Value to compare against (number or bigint).
 * @param message - Error message used when the comparison fails.
 * @throws {AssertionError} When the value is not strictly greater.
 * @returns {asserts received is (T extends number ? number : bigint)} Narrows the type after validation.
 *
 * @example
 * assertGreaterThan(10, 3);
 * assertGreaterThan(10n, 3n);
 */
export function assertGreaterThan<T extends number | bigint>(
  received: unknown,
  expected: T,
  message?: string,
): asserts received is T extends number ? number : bigint {
  assertAnyOf(
    () => assertNumber(received),
    () => assertBigint(received),
  );

  assertAnyOf(
    () => assertNumber(expected),
    () => assertBigint(expected),
  );

  if (!((received as number | bigint) > expected)) {
    throw new AssertionError({
      code: "NOT_GREATER_THAN",
      message: message ?? `Expected ${received} to be greater than ${expected}`,
      received,
      expected,
    });
  }
}
