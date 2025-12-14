import { assertGreaterThanOrEqual } from "./greater-equal.ts";

Deno.test("assertGreaterThanOrEqual", () => {
  assertGreaterThanOrEqual(5, 3);
  assertGreaterThanOrEqual(5n, 3n);
});
