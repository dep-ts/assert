import { assertFalsy } from "./falsy.ts";

Deno.test("assertFalsy", () => {
  assertFalsy(0);
});
