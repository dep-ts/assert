import { AssertionError } from './error.ts';

/**
 * Asserts that the provided function throws an error when called.
 *
 * @param fn - Synchronous function expected to throw.
 * @param message - Error message used if the function does not throw.
 * @throws {AssertionError} When the function completes without throwing.
 * @returns {void} Indicates the assertion has no return value.
 *
 * @example
 * assertThrow(() => {
 *   throw new Error('boom');
 * });
 */
export function assertThrow(
  fn: () => void,
  message: string = 'Expected function to throw'
): void {
  let notThrown = false;
  try {
    fn();
    notThrown = true;
  } catch {
    //
  }

  if (notThrown)
    throw new AssertionError({
      code: 'NOT_THROWN',
      message,
      expected: 'an error',
      received: 'no error',
    });
}
