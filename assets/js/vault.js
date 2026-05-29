// vault.js
// Conceptual vault interface for the web console.
// Real encrypted vault lives on-device in iOS app.
// © Limitless Kreationz | SFT 2026 — All Rights Reserved

const LKVault = (() => {
    // In-browser demo store 
    const memoryBlocks = new Map();

    function saveBlock(id, payload) {
        memoryBlocks.set(id, payload);
        return id;
    }

    function getBlock(id) {
        return memoryBlocks.get(id) || null;
    }

    function listBlocks() {
        return Array.from(memoryBlocks.entries()).map(([id, payload]) => ({
            id,
            createdAt: payload.harvested_at,
            origin_platform: payload.origin_platform,
            origin_account: payload.origin_account,
            origin_thread_hint: payload.origin_thread_hint,
            sha256_computed: payload.sha256_computed
        }));
    }

    return {
        saveBlock,
        getBlock,
        listBlocks
    };
})();