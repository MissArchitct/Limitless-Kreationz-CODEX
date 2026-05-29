# Vault Encryption Specification

**Owner:** © Limitless Kreationz | SFT 2026 — All Rights Reserved  

- **Algorithm:** AES-256 (e.g., AES-GCM)
- **Key Storage:** iOS Keychain with biometric access control
- **Access:** Biometric-only (no passwords, no PINs)
- **Scope:** Local-only, no automatic cloud sync

Each stored block:

- is encrypted with the vault key,
- contains a JSON payload (session metadata + cloaked content),
- is referenced by the Sovereign Ledger.