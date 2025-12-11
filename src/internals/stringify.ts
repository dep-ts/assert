/**
 * Converts a value to a JSON string, handling `bigint` and `NaN` specially.
 *
 * @param value - The value to stringify.
 * @param replacer - Optional function to modify values during stringification.
 * @param space - Optional string or number to format the output with indentation.
 * @throws Will throw if `JSON.stringify` fails.
 * @returns The JSON string representation of the input value.
 *
 * @example
 * stringify({ a: 1n, b: NaN }); // '{"a":"1n","b":"NaN"}'
 */
export function stringify(
  value: unknown,
  replacer = (_: unknown, val: unknown) =>
    typeof val === 'bigint' ? `${val}n` : Number.isNaN(val) ? 'NaN' : val,
  space?: string | number
): string {
  return JSON.stringify(value, replacer, space);
}
