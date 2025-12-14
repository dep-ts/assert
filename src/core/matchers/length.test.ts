import { assertLength } from "./length.ts";

Deno.test("assertLength", () => {
  assertLength([1, 2, 3], 3);
  assertLength("hello", 5);
  assertLength({ key: "value" }, 1);
  assertLength(new Set([1, 2]), 2);
  assertLength(new Map([["a", 1]]), 1);
});
