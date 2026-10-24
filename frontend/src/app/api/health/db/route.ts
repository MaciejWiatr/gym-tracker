import { connection } from "next/server";

import { getPool } from "@/lib/db";

export async function GET() {
  await connection();

  try {
    const { rows } = await getPool().query<{ now: Date; database: string; version: string }>(
      "select now(), current_database() as database, version()",
    );
    return Response.json({ ok: true, ...rows[0] });
  } catch (error) {
    console.error("Database health check failed", error);
    return Response.json({ ok: false }, { status: 503 });
  }
}
