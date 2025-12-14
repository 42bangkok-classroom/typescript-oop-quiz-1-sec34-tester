// LargestNumber.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runLargestNumberCli(inputs: string[]) {
  // path to the LargestNumber.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "LargestNumber.ts");

  // Use the node executable and register ts-node so we can run TypeScript directly
  const args = ["-r", "ts-node/register", scriptPath, ...inputs];

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

describe("LargestNumber CLI (integration) — run LargestNumber.ts with ts-node", () => {
  test("prints 99 for inputs 5 8 -3 99 0 20", () => {
    const res = runLargestNumberCli(["5", "8", "-3", "99", "0", "20"]);
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("99");
    expect(res.status).toBe(0);
  });

  test("prints 30 for inputs 10 20 30", () => {
    const res = runLargestNumberCli(["10", "20", "30"]);
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("30");
    expect(res.status).toBe(0);
  });

  test("prints -2 for inputs -5 -2 -10", () => {
    const res = runLargestNumberCli(["-5", "-2", "-10"]);
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("-2");
    expect(res.status).toBe(0);
  });

  test("prints 42 for single input 42", () => {
    const res = runLargestNumberCli(["42"]);
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("42");
    expect(res.status).toBe(0);
  });
});

