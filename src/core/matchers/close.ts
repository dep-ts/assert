import { AssertionError } from '@/core/utilities/error.ts';
import { assertNumber } from './number.ts';

/**
 * Asserts that a number is close to another number within a given tolerance.
 *
 * @param received - Value being validated.
 * @param expected - Target value to compare against.
 * @param tolerance - Maximum allowed difference between both numbers.
 * @param message - Error message used if the values are not close enough.
 * @throws {AssertionError} When the difference exceeds the tolerance.
 * @returns {asserts received is number} Narrows the received value to number.
 *
 * @example
 * assertCloseTo(3.14, 3.14159, 0.01);
 */
export function assertCloseTo(
  received: number,
  expected: number,
  tolerance = 1e-7,
  message?: string
): asserts received is number {
  assertNumber(received, message);
  assertNumber(expected, message);
  assertNumber(tolerance, message);

  const diff = Math.abs(received - expected);
  if (diff > tolerance) {
    throw new AssertionError({
      code: 'NOT_CLOSE_TO',
      message:
        message ??
        `Expected ${received} to be close to ${expected} (±${tolerance})`,
      received,
      expected,
    });
  }
}
