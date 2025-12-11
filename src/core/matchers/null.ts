import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is null.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not null.
 * @throws {AssertionError} When the value is not null.
 * @returns {asserts received is null} Narrows the type to null.
 *
 * @example
 * assertNull(null);
 */
export function assertNull(
  received: unknown,
  message?: string
): asserts received is null {
  if (received !== null)
    throw new AssertionError({
      code: 'NOT_NULL',
      message: message ?? 'Expected value to be null',
      received,
      expected: null,
    });
}
