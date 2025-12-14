import { assertSet } from "./set.ts";

Deno.test("assertSet", () => {
  assertSet(new Set([1, 2, 3]));
});
