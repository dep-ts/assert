import { AssertionError } from "@/core/utilities/error.ts";
import { assertString } from "./string.ts";
import { assertArray } from "./array.ts";
import { assertMap } from "./map.ts";
import { assertSet } from "./set.ts";
import { assertNumber } from "./number.ts";
import { assertObject } from "./object.ts";
import { assertAnyOf } from "@/core/utilities/any.ts";

/**
 * Asserts that the received value has the exact expected length.
 * Supports strings, arrays, plain objects, sets, and maps.
 *
 * @param received - The value being validated.
 * @param expected - The required length or size.
 * @param message - Optional custom error message.
 * @throws {AssertionError} When the value does not match the expected length.
 * @returns {asserts received is T} Narrows the type after validation.
 *
 * @example
 * assertLength([1, 2, 3], 3);
 * assertLength('hello', 5);
 * assertLength({ key: 'value' }, 1);
 * assertLength(new Set([1, 2]), 2);
 * assertLength(new Map([['a', 1]]), 1);
 */
export function assertLength<
  T extends
    | string
    | Array<unknown>
    | Record<PropertyKey, unknown>
    | Set<unknown>
    | Map<unknown, unknown>,
>(
  received: unknown,
  expected: number,
  message?: string,
): asserts received is T {
  let label: undefined | string;
  let valid: boolean = false;
  assertNumber(expected);

  assertAnyOf(
    () => assertString(received),
    () => assertArray(received),
    () => assertObject(received),
    () => assertMap(received),
    () => assertSet(received),
  );

  if (typeof received === "string") {
    label = "string";
    valid = received.length === expected;
  }

  if (Array.isArray(received)) {
    label = "array";
    valid = received.length === expected;
  }

  if (Object.prototype.toString.call(received) === "[object Object]") {
    label = "object";
    valid = Object.keys(received as object).length === expected;
  }

  if (received instanceof Set) {
    label = "set";
    valid = received.size === expected;
  }

  if (received instanceof Map) {
    label = "map";
    valid = received.size === expected;
  }

  if (!valid) {
    throw new AssertionError({
      code: `NOT_EXACT_${label!.toUpperCase()}_LENGTH`,
      message: message ?? `Expected ${label} length to be ${expected}`,
      received,
      expected,
    });
  }
}
