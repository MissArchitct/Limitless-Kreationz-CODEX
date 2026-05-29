// ledger.js
// Sovereign Ledger renderer for the web console.
// © Limitless Kreationz | SFT 2026 — All Rights Reserved

const LKLedger = (() => {
    function renderLedger() {
        const container = document.getElementById('ledger-list');
        if (!container) return;

        const blocks = LKVault.listBlocks();
        container.innerHTML = '';

        if (!blocks.length) {
            container.innerHTML = '<p class="text-white/40 text-xs">No ledger entries yet. Harvest sessions and compile them into the vault.</p>';
            return;
        }

        blocks.forEach(block => {
            const div = document.createElement('div');
            div.className = 'border border-white/10 rounded-md px-3 py-2 bg-black/60';

            div.innerHTML = `
                <div class="flex justify-between items-center text-[11px]">
                    <span class="text-[#FF1493] font-semibold">${block.id}</span>
                    <span class="text-white/40">${block.createdAt}</span>
                </div>
                <div class="mt-1 text-[10px] text-white/60">
                    Platform: ${block.origin_platform} · Account: ${block.origin_account}
                    ${block.origin_thread_hint ? `· Thread: ${block.origin_thread_hint}` : ''}
                </div>
                <div class="mt-1 text-[9px] text-white/40 break-all">
                    SHA256: ${block.sha256_computed}
                </div>
            `;
            container.appendChild(div);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Re-render when Ledger panel is selected.
        const ledgerButton = document.querySelector('.nav-pill[data-panel="ledger"]');
        if (ledgerButton) {
            ledgerButton.addEventListener('click', () => {
                renderLedger();
            });
        }
    });

    return {
        renderLedger
    };
})();
