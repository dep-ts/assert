import { AssertionError } from "./error.ts";

/**
 * Asserts that the provided async function rejects.
 *
 * @param fn - Async function expected to throw or reject.
 * @param message - Error message used if the function does not reject.
 * @throws {AssertionError} When the function resolves instead of rejecting.
 * @returns {Promise<void>} Resolves when the assertion passes.
 *
 * @example
 * await assertRejects(async () => {
 *   throw new Error('failure');
 * });
 */
export async function assertRejects(
  fn: () => Promise<unknown>,
  message?: string,
): Promise<void> {
  let notRejected = false;

  try {
    await fn();
    notRejected = true;
  } catch {
    //
  }

  if (notRejected) {
    throw new AssertionError({
      code: "NOT_REJECTED",
      message: message ?? "Expected function to reject",
      expected: "a rejection",
      received: "no rejection",
    });
  }
}
