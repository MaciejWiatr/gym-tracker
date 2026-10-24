from psycopg_pool import ConnectionPool

from app.core.config import settings

_pool: ConnectionPool | None = None


def get_pool() -> ConnectionPool:
    """Return the shared pool, opening it on first use."""
    global _pool
    if _pool is None:
        if not settings.DATABASE_URL:
            raise RuntimeError("DATABASE_URL is not set. Run `neon env pull` in the repo root.")
        _pool = ConnectionPool(
            settings.DATABASE_URL,
            # Neon's pooler (PgBouncer) already pools; keep this one small and short-lived.
            min_size=0,
            max_size=5,
            max_idle=60,
            # Replace connections Neon dropped while the compute was scaled to zero.
            check=ConnectionPool.check_connection,
            # Single statements commit on their own; use `conn.transaction()` for multi-statement work.
            kwargs={"autocommit": True, "prepare_threshold": None},
            open=False,
        )
        _pool.open()
    return _pool
