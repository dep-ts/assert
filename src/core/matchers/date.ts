import { AssertionError } from '@/core/utilities/error.ts';

/**
 * Asserts that the received value is a Date instance.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a Date.
 * @throws {AssertionError} When the value is not a Date instance.
 * @returns {asserts received is Date} Narrows the type to Date.
 *
 * @example
 * assertDate(new Date());
 */
export function assertDate(
  received: unknown,
  message?: string
): asserts received is Date {
  if (!(received instanceof Date))
    throw new AssertionError({
      code: 'NOT_DATE',
      message: message ?? 'Expected value to be a date',
      received,
      expected: 'date',
    });
}
