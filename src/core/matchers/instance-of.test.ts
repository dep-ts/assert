import { assertInstanceOf } from "./instance-of.ts";

Deno.test("assertInstanceOf", () => {
  class User {}
  const u = new User();
  assertInstanceOf(u, User);
});
