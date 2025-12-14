import { assertRecord } from "./record.ts";

Deno.test("assertRecord", () => {
  assertRecord({ key: "value" });
});
