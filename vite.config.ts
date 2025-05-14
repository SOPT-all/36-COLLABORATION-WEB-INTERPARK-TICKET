import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from 'vite-plugin-svgr'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin(), svgr()],
  resolve: {
    alias: {
      "@": "/src",
      "@styles": "/src/shared/styles",
      "@components": "/src/shared/components",
      "@assets": "/src/shared/assets",
    },
  },
});
