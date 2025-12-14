/**
 * Represents a structured assertion failure containing diagnostic information.
 */
export interface Issue {
  /** The unique error code identifying the type of assertion failure. */
  code: string;
  /** Human-readable description of what went wrong. */
  message: string;
  /** The value that was received during the assertion. */
  received: unknown;
  /** The value (or type) that was expected. */
  expected: unknown;
}

/**
 * Custom error type thrown when an assertion fails.
 * Includes structured data for better debugging and testing tools integration.
 *
 * @example
 * throw assertionError({
 *   code: 'NOT_EQUAL',
 *   message: 'Values should be strictly equal',
 *   expected: 42,
 *   received: 43,
 * });
 */
export class AssertionError extends Error {
  /** The unique error code identifying the type of assertion failure. */
  code: string;
  /** The value that was received during the assertion. */
  received: unknown;
  /** The value (or type) that was expected. */
  expected: unknown;

  /**
   * Creates a new AssertionError instance.
   *
   * @param issue - The assertion issue details..
   */
  constructor({ code, expected, message, received }: Issue) {
    const fullMessage =
      `${code}: ${message}\nExpected: ${expected}\nReceived: ${received}`;
    super(fullMessage);
    this.code = code;
    this.expected = expected;
    this.received = received;
    this.name = "AssertionError";
  }
}

/**
 * Factory function that creates an AssertionError from an Issue object.
 *
 * @param issue - The assertion issue details.
 * @returns A new AssertionError instance populated with the provided issue data.
 *
 * @example
 * throw assertionError({
 *   code: 'NOT_EQUAL',
 *   message: 'Values should be strictly equal',
 *   expected: 'foo',
 *   received: 'bar',
 * });
 */
export function assertionError(issue: Issue): AssertionError {
  return new AssertionError(issue);
}
