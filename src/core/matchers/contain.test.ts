import { assertContain } from "./contain.ts";

Deno.test("assertContain", () => {
  assertContain([1, 2, 3], 2);
  assertContain("hello world", "hello");
  assertContain({ key: "value" }, "key");
  assertContain(new Set([1, 2]), 1);
  assertContain(new Map([["a", 1]]), "a");
});
