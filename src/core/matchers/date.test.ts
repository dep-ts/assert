import { assertDate } from "./date.ts";

Deno.test("assertDate", () => {
  assertDate(new Date());
});
