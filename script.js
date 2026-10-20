// Tab Switching Logic
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // Reset all tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'text-red-900', 'shadow-sm');
        btn.classList.add('text-slate-600');
    });

    // Show active tab
    document.getElementById('tab-' + tabId).classList.remove('hidden');

    // Highlight active button
    const activeBtn = document.getElementById('btn-' + tabId);
    activeBtn.classList.remove('text-slate-600');
    activeBtn.classList.add('bg-white', 'text-red-900', 'shadow-sm');
}

// Modal Logic for Grid Items
function openModal(title, imgSrc, desc) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('projectModal').classList.remove('hidden');
    document.getElementById('projectModal').classList.add('flex');
}

function closeModal() {
    document.getElementById('projectModal').classList.add('hidden');
    document.getElementById('projectModal').classList.remove('flex');
}

// Close modal on background click
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}
