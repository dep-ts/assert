import { assertObject } from "./object.ts";

Deno.test("assertObject", () => {
  assertObject(new Date());
});
