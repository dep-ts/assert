import { AssertionError } from "@/core/utilities/error.ts";

/**
 * Asserts that the received value is a symbol.
 *
 * @param received - Value to validate.
 * @param message - Error message used if the value is not a symbol.
 * @throws {AssertionError} When the value is not a symbol.
 * @returns {asserts received is symbol} Narrows the type to a symbol.
 *
 * @example
 * assertSymbol(Symbol('id'));
 */
export function assertSymbol(
  received: unknown,
  message?: string,
): asserts received is symbol {
  if (typeof received !== "symbol") {
    throw new AssertionError({
      code: "NOT_SYMBOL",
      message: message ?? "Expected value to be a symbol",
      received,
      expected: "symbol",
    });
  }
}
