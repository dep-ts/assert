import { assertResolves } from "./resolve.ts";

Deno.test("assertResolves", async () => {
  await assertResolves(async () => {
    return await Promise.resolve(42);
  });
});
