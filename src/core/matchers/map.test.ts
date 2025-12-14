import { assertMap } from "./map.ts";

Deno.test("assertMap", () => {
  assertMap(new Map());
});
