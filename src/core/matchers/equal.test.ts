import { assertEqual } from "./equal.ts";

Deno.test("assertEqual", () => {
  assertEqual(10, 10);
});
