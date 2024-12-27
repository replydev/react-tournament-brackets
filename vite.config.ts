import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
       lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          formats: ['es']
      }
  }
});
