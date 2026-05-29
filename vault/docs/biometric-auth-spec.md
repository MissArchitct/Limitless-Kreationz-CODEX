# Biometric Authentication Specification

**Owner:** © Limitless Kreationz | SFT 2026 — All Rights Reserved  

Authentication model:

- Biometric-only (Touch ID / Face ID)
- No username/password
- No PIN fallback
- Vault key is released from Keychain only after successful biometric auth

"Login" is defined as:

> Successful biometric unlock + successful vault key retrieval.