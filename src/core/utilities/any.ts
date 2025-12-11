import { AssertionError, Issue } from './error.ts';
import { assertFunction } from '@/core/matchers/function.ts';

/**
 * Asserts that at least one of the provided assertions passes.
 *
 * @param assertions - A list of assertion functions to evaluate.
 * @throws {AssertionError} When all assertions fail.
 * @returns {void} Does not narrow the type; only validates.
 *
 * @example
 * assertAnyOf(
 *   () => assertNumber(value),
 *   () => assertString(value)
 * );
 */
export function assertAnyOf(...assertions: Array<() => void>): void {
  let issues: Array<Pick<Issue, 'expected' | 'received'>> = [];

  for (const assertion of assertions) {
    assertFunction(assertion);
    try {
      assertion();
      issues = [];
      break;
    } catch (error) {
      if (error instanceof AssertionError) {
        issues.push({ expected: error.expected, received: error.received });
        continue;
      }
      throw error;
    }
  }

  if (issues.length > 0) {
    const expected = issues.map((issue) => issue.expected).join(' | ');
    const received = issues[0].received;

    throw new AssertionError({
      code: 'NOT_ANY_OF',
      message: `Expected any of: ${expected}`,
      expected,
      received,
    });
  }
}
