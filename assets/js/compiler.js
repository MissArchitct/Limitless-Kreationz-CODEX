// compiler.js
// Sovereign Compiler: session ingestion, SHA-256 hashing, cloaking, whitelisting.
// © Limitless Kreationz | SFT 2026 — All Rights Reserved

const LKCompiler = (() => {
    /**
     * Cloaking: remove or mask obvious secrets before storage/logging.
     */
    function cloak(text) {
        // Placeholder: extend with real patterns (tokens, keys, etc.)
        return text.replace(/(api_key|token|password)\s*=\s*["'][^"']+["']/gi, '$1="***REDACTED***"');
    }

    /**
     * Whitelisting: ensure only allowed languages/types are processed.
     */
    function isLanguageWhitelisted(lang) {
        const allowed = ['javascript', 'typescript', 'python', 'html', 'css', 'json', 'markdown', 'text'];
        return allowed.includes((lang || 'text').toLowerCase());
    }

    /**
     * Compute SHA-256 hash (browser-native SubtleCrypto).
     */
    async function sha256(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    /**
     * Build a normalized session payload ready for vault storage.
     */
    async function buildSessionPayload({ sessionId, originPlatform, originAccount, originThreadHint, rawChatMarkdown }) {
        const cloaked = cloak(rawChatMarkdown);
        const hash = await sha256(cloaked);

        return {
            session_id: sessionId,
            origin_platform: originPlatform || 'UNKNOWN',
            origin_account: originAccount || 'UNKNOWN',
            origin_thread_hint: originThreadHint || null,
            raw_chat_markdown: cloaked,
            sha256_computed: hash,
            harvested_at: new Date().toISOString()
        };
    }

    return {
        cloak,
        isLanguageWhitelisted,
        sha256,
        buildSessionPayload
    };
})();