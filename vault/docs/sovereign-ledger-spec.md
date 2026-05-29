# Sovereign Ledger Specification

**Owner:** © Limitless Kreationz | SFT 2026 — All Rights Reserved  

The Sovereign Ledger is the index of all harvested and compiled sessions.

Each ledger entry includes:

- `id` (block ID)
- `session_id` (LK-SESSION-YYYYMMDD-HHMMSS-RAND4)
- `origin_platform`
- `origin_account`
- `origin_thread_hint`
- `createdAt`
- `sha256_computed`
- optional `sha256_reported` from the agent

The web console renders a read-only view; the authoritative ledger lives alongside the encrypted vault on-device.