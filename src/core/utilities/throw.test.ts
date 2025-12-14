import { assertThrow } from "./throw.ts";

Deno.test("assertThrow", () => {
  assertThrow(() => {
    throw new Error("boom");
  });
});
