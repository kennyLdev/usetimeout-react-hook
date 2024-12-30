import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "usetimeout-react-hook",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react"],
    },
  },
  plugins: [[dts({ tsconfigPath: "./tsconfig.app.json" })]],
});
