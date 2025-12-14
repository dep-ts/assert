import { AssertionError } from "@/core/utilities/error.ts";
import { assertString } from "./string.ts";
import { assertArray } from "./array.ts";
import { assertMap } from "./map.ts";
import { assertSet } from "./set.ts";
import { assertNumber } from "./number.ts";
import { assertSymbol } from "./symbol.ts";
import { assertObject } from "./object.ts";
import { assertAnyOf } from "@/core/utilities/any.ts";
import { format } from "@/private/format.ts";

/**
 * Asserts that the received value contains the expected element or key.
 * Supports strings, arrays, objects, sets, and maps.
 *
 * @template T - Type of the received value.
 * @param received - Value to validate.
 * @param expected - Element, key, or substring expected to be present.
 * @param message - Optional custom error message.
 * @throws {AssertionError} When the value does not contain the expected element.
 * @returns {asserts received is T} Narrows the type after validation.
 *
 * @example
 * assertContain([1, 2, 3], 2);
 * assertContain('hello world', 'hello');
 * assertContain({ key: 'value' }, 'key');
 * assertContain(new Set([1, 2]), 1);
 * assertContain(new Map([['a', 1]]), 'a');
 */
export function assertContain<
  T extends
    | string
    | Array<unknown>
    | Record<PropertyKey, unknown>
    | Set<unknown>
    | Map<unknown, unknown>,
>(
  received: unknown,
  expected: unknown,
  message?: string,
): asserts received is T {
  let label;
  let valid = false;

  assertAnyOf(
    () => assertString(received),
    () => assertArray(received),
    () => assertObject(received),
    () => assertMap(received),
    () => assertSet(received),
  );

  if (typeof received === "string") {
    label = "string";
    assertString(expected);
    valid = received.includes(expected);
  }

  if (Array.isArray(received)) {
    label = "array";
    valid = received.includes(expected);
  }

  if (Object.prototype.toString.call(received) === "[object Object]") {
    label = "object";

    assertAnyOf(
      () => assertString(expected),
      () => assertNumber(expected),
      () => assertSymbol(expected),
    );

    valid = Object.prototype.hasOwnProperty.call(
      received,
      expected as PropertyKey,
    );
  }

  if (received instanceof Set) {
    label = "set";
    valid = received.has(expected);
  }

  if (received instanceof Map) {
    label = "map";
    valid = received.has(expected);
  }

  if (!valid) {
    throw new AssertionError({
      code: `${label!.toUpperCase()}_DOES_NOT_CONTAIN`,
      message: message ?? `Expected ${label} to contain ${format(expected)}`,
      received,
      expected,
    });
  }
}
