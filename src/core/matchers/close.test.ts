import { assertCloseTo } from "./close.ts";

Deno.test("assertCloseTo", () => {
  assertCloseTo(3.14, 3.14159, 0.01);
});
