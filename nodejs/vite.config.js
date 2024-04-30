import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  server: {
    port: 8080,
    host: true
  },
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/pages/index.html"),
        grid: resolve(__dirname, "src/pages/grid.html"),
        close: resolve(__dirname, "src/pages/close.html"),
        single: resolve(__dirname, "src/pages/single.html")
      }
    }
  }
});
