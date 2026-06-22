// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const icon = document.querySelector('.theme-icon');
    
    if (html.getAttribute('data-theme') === 'light') {
        html.setAttribute('data-theme', 'dark');
        icon.textContent = '☀️';
    } else {
        html.setAttribute('data-theme', 'light');
        icon.textContent = '🌙';
    }
}

// Modal Toggle
function toggleModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.toggle('active');
    
    if (!overlay.classList.contains('active')) {
        clearForm();
    }
}

// Clear Form
function clearForm() {
    document.getElementById('deviceName').value = '';
    document.getElementById('deviceLocation').value = '';
    document.getElementById('deviceDate').value = '';
    document.getElementById('deviceStatus').value = 'Active';
}

// Add Equipment
function addEquipment() {
    const name = document.getElementById('deviceName').value.trim();
    const location = document.getElementById('deviceLocation').value.trim();
    const date = document.getElementById('deviceDate').value;
    const status = document.getElementById('deviceStatus').value;

    if (!name || !location || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const statusClass = status === 'Active' ? 'good' : 
                        status === 'Needs Check' ? 'warning' : 'danger';

    const tbody = document.getElementById('equipmentBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${location}</td>
        <td>${date}</td>
        <td><span class="status ${statusClass}">${status}</span></td>
        <td><button class="delete-btn" onclick="deleteRow(this)">🗑</button></td>
    `;
    
    tbody.appendChild(row);
    updateStats();
    toggleModal();
}

// Update Stats
function updateStats() {
    const rows = document.querySelectorAll('#equipmentBody tr');
    const total = rows.length;
    const needsCheck = document.querySelectorAll('#equipmentBody .status.warning, #equipmentBody .status.danger').length;
    const active = document.querySelectorAll('#equipmentBody .status.good').length;

    document.querySelectorAll('.number')[0].textContent = total;
    document.querySelectorAll('.number')[1].textContent = needsCheck;
    document.querySelectorAll('.number')[2].textContent = active;
}
// Delete Row
function deleteRow(btn) {
    const row = btn.closest('tr');
    row.remove();
    updateStats();
}