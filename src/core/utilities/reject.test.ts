import { assertRejects } from "./reject.ts";

Deno.test("assertRejects", async () => {
  await assertRejects(async () => {
    await Promise.resolve("...");
    throw new Error("failure");
  });
});
