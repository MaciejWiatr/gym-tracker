import logging

from fastapi import APIRouter
from fastapi.responses import JSONResponse

from app.core.db import get_pool

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/health", tags=["health"])


@router.get("/db")
def read_db_health():
    try:
        with get_pool().connection() as conn:
            row = conn.execute("select now(), current_database(), version()").fetchone()
    except Exception:
        logger.exception("Database health check failed")
        return JSONResponse({"ok": False}, status_code=503)

    now, database, version = row
    return {"ok": True, "now": now.isoformat(), "database": database, "version": version}
