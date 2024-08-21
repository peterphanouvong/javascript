import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      name: "@kinde/types",
      fileName: "types",
    },
    target: "esnext",
    outDir: "../dist",
    emptyOutDir: true,
  },
  root: "src",
  base: "",
  resolve: { alias: { src: resolve(__dirname, "./src") } },
  plugins: [dts({ insertTypesEntry: true, outDir: "../dist" })],
});
