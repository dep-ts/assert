import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is a bigint.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a bigint.
 * @throws {AssertionError} When the value is not a bigint.
 * @returns {asserts received is bigint} Narrows the type to bigint.
 *
 * @example
 * assertBigint(10n);
 */
export function assertBigint(
  received: unknown,
  message?: string
): asserts received is bigint {
  if (typeof received !== 'bigint')
    throw new AssertionError({
      code: 'NOT_BIGINT',
      message: message ?? 'Expected value to be a bigint',
      received,
      expected: 'bigint',
    });
}
