// harvester.js
// Harvester workflow hooks for future UI (paste/import).
// © Limitless Kreationz | SFT 2026 — All Rights Reserved

const LKHarvester = (() => {
    /**
     * Parse a harvested Mirror Mode response into:
     * - sessionId
     * - rawChatMarkdown
     * - reportedSha256 (if present)
     */
    function parseMirrorResponse(text) {
        const lines = text.split('\n');
        const sessionLine = lines.find(l => l.startsWith('SESSION-ID:'));
        const sessionId = sessionLine ? sessionLine.replace('SESSION-ID:', '').trim() : 'UNKNOWN';

        const codeStart = lines.findIndex(l => l.trim().startsWith('```'));
        const codeEnd = lines.slice(codeStart + 1).findIndex(l => l.trim().startsWith('```'));
        let rawChatMarkdown = '';

        if (codeStart !== -1 && codeEnd !== -1) {
            rawChatMarkdown = lines.slice(codeStart + 1, codeStart + 1 + codeEnd).join('\n');
        }

        const shaLine = lines.find(l => l.startsWith('SHA256:'));
        const reportedSha256 = shaLine ? shaLine.replace('SHA256:', '').trim() : null;

        return { sessionId, rawChatMarkdown, reportedSha256 };
    }

    return {
        parseMirrorResponse
    };
})();