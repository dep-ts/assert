import { stringify } from "./stringify.ts";

/**
 * Formats a value into a readable string, handling strings, bigints, Maps, Sets,
 * symbols, functions, NaN, and other values.
 *
 * @param value - The value to format.
 * @returns A string representation of the input value.
 *
 * @example
 * format(new Map([['a', 1n]])); // 'Map(1) { "a" => "1n" }'
 */
export function format(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "bigint") return `${value}n`;

  if (value instanceof Map) {
    const entries = Array.from(value.entries()).map(
      ([k, v]) => `${stringify(k)} => ${stringify(v)}`,
    );
    return `Map(${value.size}) ${
      value.size === 0 ? "{}" : `{ ${entries.join(", ")} }`
    }`;
  }

  if (value instanceof Set) {
    return `Set(${value.size}) ${
      value.size === 0 ? "{}" : `{ ${Array.from(value).join(", ")} }`
    }`;
  }

  if (
    typeof value === "symbol" ||
    typeof value === "function" ||
    Number.isNaN(value)
  ) {
    return String(value);
  }

  return stringify(value);
}
