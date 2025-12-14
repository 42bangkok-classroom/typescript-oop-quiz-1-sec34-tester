// light.cli.test.ts
import { spawnSync } from "child_process";
import path from "path";

function runLightCli(input: string | undefined) {
  // path to the light.ts file in the same folder as the test
  const scriptPath = path.join(__dirname, "light.ts");

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

describe("Light CLI (integration) — run light.ts with ts-node", () => {
  test("prints 'Stop' for red", () => {
    const res = runLightCli("red");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Stop");
    expect(res.status).toBe(0);
  });

  test("prints 'Stop' for Red (case-insensitive)", () => {
    const res = runLightCli("Red");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Stop");
    expect(res.status).toBe(0);
  });

  test("prints 'Stop' for RED (case-insensitive)", () => {
    const res = runLightCli("RED");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Stop");
    expect(res.status).toBe(0);
  });

  test("prints 'Unknown' for empty string", () => {
    const res = runLightCli("");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Unknown");
  });

  test("prints 'Unknown' for blue", () => {
    const res = runLightCli("blue");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Unknown");
  });

  test("prints 'Caution' for yellow", () => {
    const res = runLightCli("yellow");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Caution");
    expect(res.status).toBe(0);
  });

  test("prints 'Go' for green", () => {
    const res = runLightCli("green");
    expect(res.error).toBeUndefined();
    expect(res.stdout?.trim()).toBe("Go");
    expect(res.status).toBe(0);
  });
});

