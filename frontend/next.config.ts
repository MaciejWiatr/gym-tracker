import { existsSync } from "node:fs";
import path from "node:path";
import type { NextConfig } from "next";

// `neon deploy` / `neon env pull` write DATABASE_URL to the repo root, next to neon.ts.
// Load it for local dev; vars already in process.env (e.g. on Vercel) are not overridden.
const neonEnvFile = path.join(__dirname, "..", ".env.local");
if (existsSync(neonEnvFile)) {
  process.loadEnvFile(neonEnvFile);
}

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The repo root has its own lockfile for neon.ts; keep frontend/ as the app root.
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
