import { AssertionError } from '@/core/utilities/error.ts';
import { format } from '@/internals/format.ts';

/**
 * Asserts that two values are strictly equal using `Object.is`.
 *
 * @param received - Value being validated.
 * @param expected - Value to compare against.
 * @param message - Error message used when values differ.
 * @throws {AssertionError} When the values are not strictly equal.
 * @returns {asserts received is T} Narrows the received value to the expected type.
 *
 * @example
 * assertEqual(10, 10);
 */
export function assertEqual<T>(
  received: unknown,
  expected: T,
  message?: string
): asserts received is T {
  if (!Object.is(received, expected))
    throw new AssertionError({
      code: 'NOT_EQUAL',
      message:
        message ?? `Expected ${format(received)}, but got ${format(expected)}`,
      received,
      expected,
    });
}
