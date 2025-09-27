import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    // Alternative configuration:
    historyApiFallback: {
      rewrites: [{ from: /^\/(?!api).*$/, to: "/index.html" }],
    },
  },
});
