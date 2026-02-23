import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detect if running on GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? '/physical-therapy-centre/' : '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Ensure clean build
    emptyOutDir: true,
  },
  // Handle SPA routing for GitHub Pages
  // This ensures assets are loaded correctly
  server: {
    port: 5173,
    open: true,
  },
});
