import { assertNaN } from "./nan.ts";

Deno.test("assertNaN", () => {
  assertNaN(NaN);
});
