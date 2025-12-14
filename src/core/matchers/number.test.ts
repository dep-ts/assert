import { assertNumber } from "./number.ts";

Deno.test("assertNumber", () => {
  assertNumber(42);
});
