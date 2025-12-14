// ValidatePass.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runValidatePassCli(input: string | undefined) {
  // path to the ValidatePass.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "ValidatePass.ts");

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

describe("ValidatePass CLI (integration) — run ValidatePass.ts with ts-node", () => {
  test("prints 'Valid' for Hello123", () => {
    const res = runValidatePassCli("Hello123");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Valid");
    expect(res.status).toBe(0);
  });

  test("prints 'Invalid' for hello123 (no uppercase)", () => {
    const res = runValidatePassCli("hello123");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Invalid");
  });

  test("prints 'Invalid' for Hello (no number, too short)", () => {
    const res = runValidatePassCli("Hello");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Invalid");
  });

  test("prints 'Invalid' for HELLO123 (no lowercase, but has uppercase and number)", () => {
    const res = runValidatePassCli("HELLO123");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Invalid");
  });

  test("prints 'Valid' for Pass1234", () => {
    const res = runValidatePassCli("Pass1234");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Valid");
    expect(res.status).toBe(0);
  });
});

