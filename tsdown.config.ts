import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: ["./src/index.ts"],
    format: ["esm", "cjs"],
    platform: "node",
    dts: true,
    sourcemap: true,
  },
  {
    entry: ["./src/core.ts"],
    format: ["umd"],
    outputOptions: {
      name: "eta",
    },
    platform: "browser",
    dts: true,
    minify: true,
    sourcemap: true,
  },
]);
