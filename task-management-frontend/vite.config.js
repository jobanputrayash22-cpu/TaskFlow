import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: ["taskflow-10g1.onrender.com"]
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: ["taskflow-10g1.onrender.com"]
  }
});