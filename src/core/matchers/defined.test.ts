import { assertDefined } from "./defined.ts";

Deno.test("assertDefined", () => {
  assertDefined("something");
});
