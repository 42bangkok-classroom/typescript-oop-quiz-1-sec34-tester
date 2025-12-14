// Reverse.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runReverseCli(input: string | undefined) {
  // path to the Reverse.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "Reverse.ts");

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

describe("Reverse CLI (integration) — run Reverse.ts with ts-node", () => {
  test("reverses 'hello' to 'olleh'", () => {
    const res = runReverseCli("hello");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("olleh");
    expect(res.status).toBe(0);
  });

  test("reverses 'world' to 'dlrow'", () => {
    const res = runReverseCli("world");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("dlrow");
    expect(res.status).toBe(0);
  });

  test("reverses 'TypeScript' to 'tpircSepyT'", () => {
    const res = runReverseCli("TypeScript");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("tpircSepyT");
    expect(res.status).toBe(0);
  });

  test("reverses 'a' to 'a'", () => {
    const res = runReverseCli("a");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("a");
    expect(res.status).toBe(0);
  });
});

