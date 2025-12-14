import { assertSymbol } from "./symbol.ts";

Deno.test("assertSymbol", () => {
  assertSymbol(Symbol("id"));
});
