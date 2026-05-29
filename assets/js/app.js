// app.js
// UI wiring for panel switching and basic console behavior.
// © Limitless Kreationz | SFT 2026 — All Rights Reserved

document.addEventListener('DOMContentLoaded', () => {
    const navPills = document.querySelectorAll('.nav-pill');
    const panels = document.querySelectorAll('.panel');

    navPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const target = pill.getAttribute('data-panel');

            navPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            panels.forEach(panel => {
                if (panel.id === `panel-${target}`) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });
});