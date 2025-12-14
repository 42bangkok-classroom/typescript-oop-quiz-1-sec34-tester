// OneOrZero.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runOneOrZeroCli(input: string | undefined) {
  // path to the OneOrZero.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "OneOrZero.ts");

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

describe("OneOrZero CLI (integration) — run OneOrZero.ts with ts-node", () => {
  test("prints alternating 1s and 0s for size 5", () => {
    const res = runOneOrZeroCli("5");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("11111\n00000\n11111\n00000\n11111");
    expect(res.status).toBe(0);
  });

  test("prints alternating 1s and 0s for size 3", () => {
    const res = runOneOrZeroCli("3");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("111\n000\n111");
    expect(res.status).toBe(0);
  });

  test("prints alternating 1s and 0s for size 4", () => {
    const res = runOneOrZeroCli("4");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("1111\n0000\n1111\n0000");
    expect(res.status).toBe(0);
  });
});

