// starPyramid.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runStarPyramidCli(input: string | undefined) {
  // path to the starPyramid.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "starPyramid.ts");

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

describe("StarPyramid CLI (integration) — run starPyramid.ts with ts-node", () => {
  test("prints star pyramid for size 5", () => {
    const res = runStarPyramidCli("5");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("*\n**\n***\n****\n*****");
    expect(res.status).toBe(0);
  });

  test("prints star pyramid for size 3", () => {
    const res = runStarPyramidCli("3");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("*\n**\n***");
    expect(res.status).toBe(0);
  });

  test("prints star pyramid for size 1", () => {
    const res = runStarPyramidCli("1");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("*");
    expect(res.status).toBe(0);
  });
});

