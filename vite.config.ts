import { defineConfig } from "vite";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "src"),
      "@/clear-styles": path.resolve(__dirname, "src", "styles", "index.css"),
    },
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
});
