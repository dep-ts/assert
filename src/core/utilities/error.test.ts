import { assertionError } from "./error.ts";
import { assertThrow } from "./throw.ts";

Deno.test("assertionError", () => {
  assertThrow(() => {
    throw assertionError({
      code: "NOT_EQUAL",
      message: "Values should be strictly equal",
      expected: 42,
      received: 43,
    });
  });
});
