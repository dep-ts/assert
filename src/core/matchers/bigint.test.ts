import { assertBigint } from "./bigint.ts";

Deno.test("assertBigint", () => {
  assertBigint(10n);
});
