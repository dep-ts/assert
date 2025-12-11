import { AssertionError } from '@/core/utilities/error.ts';
import { assertObject } from './object.ts';

/**
 * Asserts that the received value is a plain record object.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a record.
 * @throws {AssertionError} When the value is not a record.
 * @returns {asserts received is Record<PropertyKey, unknown>} Narrows the type to a record.
 *
 * @example
 * assertRecord({ key: 'value' });
 */
export function assertRecord(
  received: unknown,
  message?: string
): asserts received is Record<PropertyKey, unknown> {
  assertObject(received, message);
  if (received?.constructor !== Object) {
    throw new AssertionError({
      code: 'NOT_RECORD',
      message: message ?? 'Expected value to be a record',
      received,
      expected: 'record',
    });
  }
}
