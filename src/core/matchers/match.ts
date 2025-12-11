import { AssertionError } from '@/core/utilities/error.ts';
import { assertString } from './string.ts';
import { assertRegExp } from './regexp.ts';

/**
 * Asserts that the received string matches the expected regular expression.
 *
 * @param received - String value to validate.
 * @param expected - Regular expression to test against.
 * @param message - Optional custom error message.
 * @throws {AssertionError} When the string does not match the regular expression.
 * @returns {asserts received is string} Narrows the type to string after validation.
 *
 * @example
 * assertMatch('hello world', /world$/);
 */
export function assertMatch(
  received: string,
  expected: RegExp,
  message?: string
): asserts received is string {
  assertString(received);
  assertRegExp(expected);

  if (received.match(expected) === null)
    throw new AssertionError({
      code: 'NOT_MATCH',
      message: message ?? `Expected "${received}" to match ${expected}`,
      received,
      expected,
    });
}
