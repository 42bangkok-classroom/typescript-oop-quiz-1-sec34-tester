// hasAt.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runHasAtCli(input: string | undefined) {
  // path to the hasAt.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "hasAt.ts");

  // Use the node executable and register ts-node so we can run TypeScript directly
  const args = ["-r", "ts-node/register", scriptPath];
  if (typeof input !== "undefined") args.push(String(input));

  const result = spawnSync(process.execPath, args, {
    encoding: "utf8",
    env: {
      ...process.env,
      // optional: speed up ts-node by transpile-only mode (if ts-node is installed)
      TS_NODE_TRANSPILE_ONLY: "1",
    },
    timeout: 5000,
  });

  // return full result for assertions (stdout, stderr, status)
  return result;
}

describe("HasAt CLI (integration) — run hasAt.ts with ts-node", () => {
  test("prints 'Has @' for hello@example.com", () => {
    const res = runHasAtCli("hello@example.com");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Has @");
    expect(res.status).toBe(0);
  });

  test("prints 'No @' for hello", () => {
    const res = runHasAtCli("hello");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("No @");
    expect(res.status).toBe(0);
  });

  test("prints 'Has @' for test@", () => {
    const res = runHasAtCli("test@");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Has @");
    expect(res.status).toBe(0);
  });

  test("prints 'Has @' for @test", () => {
    const res = runHasAtCli("@test");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Has @");
    expect(res.status).toBe(0);
  });
});

