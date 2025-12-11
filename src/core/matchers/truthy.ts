import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is truthy.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not truthy.
 * @throws {AssertionError} When the value is not truthy.
 * @returns {asserts received is T} Narrows the type to a truthy value.
 *
 * @example
 * assertTruthy('hello');
 */
export function assertTruthy<T>(
  received: T,
  message?: string
): asserts received is T {
  if (!received)
    throw new AssertionError({
      code: 'NOT_TRUTHY',
      message: message ?? 'Expected value to be truthy',
      received,
      expected: 'truthy',
    });
}
