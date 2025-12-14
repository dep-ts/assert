import { assertGreaterThan } from "./greater.ts";

Deno.test("assertGreaterThan", () => {
  assertGreaterThan(10, 3);
  assertGreaterThan(10n, 3n);
});
