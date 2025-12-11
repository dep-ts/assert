import { AssertionError } from './error.ts';

/**
 * Asserts that the provided async function resolves successfully.
 *
 * @param fn - Async function expected to resolve without throwing.
 * @param message - Error message used if the function rejects.
 * @throws {AssertionError} When the function rejects instead of resolving.
 * @returns {Promise<void>} Resolves when the assertion passes.
 *
 * @example
 * await assertResolves(async () => {
 *   return 42;
 * });
 */
export async function assertResolves(
  fn: () => Promise<unknown>,
  message?: string
): Promise<void> {
  try {
    await fn();
  } catch {
    throw new AssertionError({
      code: 'NOT_RESOLVED',
      message: message ?? 'Expected function to resolve',
      expected: 'a resolution',
      received: 'a rejection',
    });
  }
}
