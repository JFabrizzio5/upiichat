import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/base": path.resolve(__dirname, "./src/components/core"),
    },
  },
});
