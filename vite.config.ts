import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";

export default defineConfig(() => {
  return {
    build: { outDir: "build" },
    plugins: [qwikCity(), qwikVite()],
    resolve: { tsconfigPaths: true },
    server: { port: 3001 },
  };
});
