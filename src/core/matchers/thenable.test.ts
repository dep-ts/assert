import { assertThenable } from "./thenable.ts";

Deno.test("assertThenable", () => {
  assertThenable({ then: () => {} });
});
