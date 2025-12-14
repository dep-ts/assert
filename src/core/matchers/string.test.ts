import { assertString } from "./string.ts";

Deno.test("assertString", () => {
  assertString("hola");
});
