import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is undefined.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not undefined.
 * @throws {AssertionError} When the value is not undefined.
 * @returns {asserts received is undefined} Narrows the type to undefined.
 *
 * @example
 * assertUndefined(undefined);
 */
export function assertUndefined(
  received: unknown,
  message?: string
): asserts received is undefined {
  if (!Object.is(received, undefined))
    throw new AssertionError({
      code: 'NOT_UNDEFINED',
      message: message ?? 'Expected value to be undefined',
      received,
      expected: undefined,
    });
}
