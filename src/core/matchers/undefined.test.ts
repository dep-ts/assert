import { assertUndefined } from "./undefined.ts";

Deno.test("assertUndefined", () => {
  assertUndefined(undefined);
});
