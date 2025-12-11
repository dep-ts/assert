import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is an array.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not an array.
 * @throws {AssertionError} When the value is not an array.
 * @returns {asserts received is Array<T>} Narrows the type to an array.
 *
 * @example
 * assertArray([1, 2, 3]);
 */
export function assertArray<T>(
  received: unknown,
  message?: string
): asserts received is Array<T> {
  if (!Array.isArray(received))
    throw new AssertionError({
      code: 'NOT_ARRAY',
      message: message ?? 'Expected value to be an array',
      received,
      expected: 'array',
    });
}
