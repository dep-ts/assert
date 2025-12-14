import { assertLessThanOrEqual } from "./less-equal.ts";

Deno.test("assertLessThanOrEqual", () => {
  assertLessThanOrEqual(5, 10);
  assertLessThanOrEqual(10n, 10n);
});
