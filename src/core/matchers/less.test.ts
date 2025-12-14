import { assertLessThan } from "./less.ts";

Deno.test("assertLessThan", () => {
  assertLessThan(5, 10);
  assertLessThan(5n, 10n);
});
