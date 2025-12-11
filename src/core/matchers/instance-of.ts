import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is an instance of the given constructor.
 *
 * @param received - The value being validated.
 * @param expected - The class or constructor function the value should be an instance of.
 * @param message - The error message used when the assertion fails.
 * @throws {AssertionError} When the value is not an instance of the expected constructor.
 * @returns {asserts received is T} Narrows the type after validation.
 *
 * @example
 * class User {}
 * const u = new User();
 * assertInstanceOf(u, User);
 */
export function assertInstanceOf<T>(
  received: unknown,
  // deno-lint-ignore no-explicit-any
  expected: new (...args: any[]) => T,
  message: string,
): asserts received is T {
  if (!(received instanceof expected)) {
    throw new AssertionError({
      code: "NOT_INSTANCE_OF",
      message: message ?? `Expected an instance of ${expected.name}`,
      received,
      expected,
    });
  }
}
