import { assertTruthy } from "./truthy.ts";

Deno.test("assertTruthy", () => {
  assertTruthy("hello");
});
