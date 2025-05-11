import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/shared/styles",
      "@components": "/src/shared/components",
      "@assets": "/src/shared/assets",
    },
  },
});
