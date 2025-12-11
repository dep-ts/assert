import { AssertionError } from "./error.ts";
import { assertFunction } from "@/core/matchers/function.ts";

/**
 * Asserts that none of the provided assertions pass.
 *
 * @param assertions - A list of assertion functions to evaluate.
 * @throws {AssertionError} When at least one assertion succeeds.
 * @returns {void} Does not narrow the type; only validates.
 *
 * @example
 * assertNoneOf(
 *   () => assertNumber(value),
 *   () => assertString(value)
 * );
 */
export function assertNoneOf(...assertions: Array<() => void>): void {
  let passed = false;
  let index = 0;

  for (const assertion of assertions) {
    assertFunction(assertion);

    try {
      assertion();
      passed = true;
      break;
    } catch {
      index++;
    }
  }

  if (passed) {
    throw new AssertionError({
      code: "UNEXPECTED_PASS",
      message:
        `Assertion at index ${index} unexpectedly passed (it should have failed)`,
      expected: "assertion to fail",
      received: "assertion passed",
    });
  }
}
