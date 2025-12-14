import { assertDeepEqual } from "./deep-equal.ts";

Deno.test("assertDeepEqual", () => {
  assertDeepEqual({ a: 1 }, { a: 1 });
});
