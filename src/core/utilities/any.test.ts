import { assertAnyOf } from "./any.ts";
import { assertNumber } from "@/core/matchers/number.ts";
import { assertString } from "@/core/matchers/string.ts";

Deno.test("assertAnyOf", () => {
  const value = "Hello";
  assertAnyOf(
    () => assertNumber(value),
    () => assertString(value),
  );
});
