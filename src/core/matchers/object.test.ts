import { assertObject } from "./object.ts";

Deno.test("assertObject", () => {
  assertObject({ a: 1 });
});
