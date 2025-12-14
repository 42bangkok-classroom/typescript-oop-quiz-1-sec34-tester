// temp.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runTempCli(input: string | undefined) {
  // path to the temp.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "temp.ts");

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

describe("Temp CLI (integration) — run temp.ts with ts-node", () => {
  test("prints 'Hot' for 32", () => {
    const res = runTempCli("32");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Hot");
    expect(res.status).toBe(0);
  });

  test("prints 'Normal' for 25", () => {
    const res = runTempCli("25");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Normal");
    expect(res.status).toBe(0);
  });

  test("prints 'Normal' for 30", () => {
    const res = runTempCli("30");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Normal");
    expect(res.status).toBe(0);
  });

  test("prints 'Hot' for 31", () => {
    const res = runTempCli("31");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Hot");
    expect(res.status).toBe(0);
  });
});

