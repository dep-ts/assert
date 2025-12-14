import { assertFunction } from "./function.ts";

Deno.test("assertFunction", () => {
  assertFunction(() => 123);
});
