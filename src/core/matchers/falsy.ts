import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is falsy.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not falsy.
 * @throws {AssertionError} When the value is truthy.
 * @returns {asserts received is T} Narrows the type after validation.
 *
 * @example
 * assertFalsy(0);
 */
export function assertFalsy<T>(
  received: T,
  message?: string
): asserts received is T {
  if (received)
    throw new AssertionError({
      code: 'NOT_FALSY',
      message: message ?? 'Expected value to be falsy',
      received,
      expected: 'falsy',
    });
}
