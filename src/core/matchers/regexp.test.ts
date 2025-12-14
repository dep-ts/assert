import { assertRegExp } from "./regexp.ts";

Deno.test("assertRegExp", () => {
  assertRegExp(/test/);
});
