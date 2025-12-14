// Even.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runEvenCli(input: string | undefined) {
  // path to the Even.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "Even.ts");

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

describe("Even CLI (integration) — run Even.ts with ts-node", () => {
  test("prints even numbers from 0 to 10", () => {
    const res = runEvenCli("10");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("0\n2\n4\n6\n8\n10");
    expect(res.status).toBe(0);
  });

  test("prints even numbers from 0 to 5", () => {
    const res = runEvenCli("5");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("0\n2\n4");
    expect(res.status).toBe(0);
  });

  test("prints nothing for invalid input ABC", () => {
    const res = runEvenCli("ABC");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("");
  });

  test("prints nothing when missing argument", () => {
    const res = runEvenCli(undefined);
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("");
  });
});

