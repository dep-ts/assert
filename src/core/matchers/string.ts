import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is a string.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a string.
 * @throws {AssertionError} When the value is not a string.
 * @returns {asserts received is string} Narrows the type to string.
 *
 * @example
 * assertString("hola");
 */
export function assertString(
  received: unknown,
  message?: string
): asserts received is string {
  if (typeof received !== 'string')
    throw new AssertionError({
      code: 'NOT_STRING',
      message: message ?? 'Expected value to be a string',
      received,
      expected: 'string',
    });
}
