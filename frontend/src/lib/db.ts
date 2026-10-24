import { attachDatabasePool } from "@vercel/functions";
import { Pool } from "pg";

let pool: Pool | undefined;

// One pool per function instance, on the pooled Neon connection string.
export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set. Run `neon env pull` in the repo root.");
    }
    pool = new Pool({ connectionString });
    // Neon drops idle connections when the compute scales to zero; don't crash on it.
    pool.on("error", (error) => console.error("Idle Postgres client error", error));
    // Lets Vercel Fluid compute close idle clients before the instance suspends.
    attachDatabasePool(pool);
  }
  return pool;
}
