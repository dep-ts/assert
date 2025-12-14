import { assertNumber } from "@/core/matchers/number.ts";
import { assertString } from "@/core/matchers/string.ts";
import { assertNoneOf } from "./none.ts";

Deno.test("assertNoneOf", () => {
  const value = false;
  assertNoneOf(
    () => assertNumber(value),
    () => assertString(value),
  );
});
