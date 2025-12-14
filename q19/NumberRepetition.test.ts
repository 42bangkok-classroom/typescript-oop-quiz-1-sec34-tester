// NumberRepetition.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runNumberRepetitionCli(input: string | undefined) {
  // path to the NumberRepetition.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "NumberRepetition.ts");

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

describe("NumberRepetition CLI (integration) — run NumberRepetition.ts with ts-node", () => {
  test("prints number repetition pattern for size 5", () => {
    const res = runNumberRepetitionCli("5");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("11111\n22222\n33333\n44444\n55555");
    expect(res.status).toBe(0);
  });

  test("prints number repetition pattern for size 3", () => {
    const res = runNumberRepetitionCli("3");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("111\n222\n333");
    expect(res.status).toBe(0);
  });

  test("prints number repetition pattern for size 4", () => {
    const res = runNumberRepetitionCli("4");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("1111\n2222\n3333\n4444");
    expect(res.status).toBe(0);
  });
});

