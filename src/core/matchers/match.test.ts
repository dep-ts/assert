import { assertMatch } from "./match.ts";

Deno.test("assertMatch", () => {
  assertMatch("hello world", /world$/);
});
