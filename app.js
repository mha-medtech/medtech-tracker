// Translations
const translations = {
    en: {
        nav_dashboard: "Dashboard",
        nav_equipment: "Equipment",
        nav_maintenance: "Maintenance",
        nav_reports: "Reports",
        stat_total: "Total Equipment",
        stat_maintenance: "Needs Maintenance",
        stat_active: "Active",
        equipment_title: "Equipment List",
        search_placeholder: "Search equipment...",
        filter_all: "All Status",
        status_active: "Active",
        status_needs_check: "Needs Check",
        status_out: "Out of Service",
        btn_add: "+ Add Equipment",
        modal_title: "Add New Equipment",
        form_name: "Device Name",
        form_name_ph: "e.g. ECG Monitor",
        form_location: "Location",
        form_location_ph: "e.g. ICU - Room 3",
        form_date: "Last Calibration",
        form_status: "Status",
        btn_cancel: "Cancel",
        btn_save: "Save Equipment",
        col_device: "Device",
        col_location: "Location",
        col_date: "Last Calibration",
        col_status: "Status",
        no_results: "No equipment found."
    },
    de: {
        nav_dashboard: "Dashboard",
        nav_equipment: "Geräte",
        nav_maintenance: "Wartung",
        nav_reports: "Berichte",
        stat_total: "Geräte gesamt",
        stat_maintenance: "Wartung erforderlich",
        stat_active: "Aktiv",
        equipment_title: "Geräteliste",
        search_placeholder: "Gerät suchen...",
        filter_all: "Alle Status",
        status_active: "Aktiv",
        status_needs_check: "Prüfung erforderlich",
        status_out: "Außer Betrieb",
        btn_add: "+ Gerät hinzufügen",
        modal_title: "Neues Gerät hinzufügen",
        form_name: "Gerätename",
        form_name_ph: "z.B. EKG-Monitor",
        form_location: "Standort",
        form_location_ph: "z.B. ITS - Zimmer 3",
        form_date: "Letzte Kalibrierung",
        form_status: "Status",
        btn_cancel: "Abbrechen",
        btn_save: "Gerät speichern",
        col_device: "Gerät",
        col_location: "Standort",
        col_date: "Letzte Kalibrierung",
        col_status: "Status",
        no_results: "Kein Gerät gefunden."
    },
    fa: {
        nav_dashboard: "داشبورد",
        nav_equipment: "تجهیزات",
        nav_maintenance: "نگهداری",
        nav_reports: "گزارش‌ها",
        stat_total: "کل تجهیزات",
        stat_maintenance: "نیاز به سرویس",
        stat_active: "فعال",
        equipment_title: "لیست تجهیزات",
        search_placeholder: "جستجوی تجهیزات...",
        filter_all: "همه وضعیت‌ها",
        status_active: "فعال",
        status_needs_check: "نیاز به بررسی",
        status_out: "خارج از سرویس",
        btn_add: "+ افزودن تجهیز",
        modal_title: "افزودن تجهیز جدید",
        form_name: "نام دستگاه",
        form_name_ph: "مثلاً مانیتور ECG",
        form_location: "موقعیت",
        form_location_ph: "مثلاً ICU - اتاق ۳",
        form_date: "آخرین کالیبراسیون",
        form_status: "وضعیت",
        btn_cancel: "انصراف",
        btn_save: "ذخیره تجهیز",
        col_device: "دستگاه",
        col_location: "موقعیت",
        col_date: "آخرین کالیبراسیون",
        col_status: "وضعیت",
        no_results: "تجهیزی یافت نشد."
    }
};

let currentLang = 'en';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    const isRtl = lang === 'fa';

    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    localStorage.setItem('lang', lang);
}
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
    saveEquipment();
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
    saveEquipment();
}
// Search & Filter
function filterTable() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#equipmentBody tr');
    let visibleCount = 0;

    rows.forEach(row => {
        if (row.id === 'noResults') return;
        const name = row.cells[0].textContent.toLowerCase();
        const location = row.cells[1].textContent.toLowerCase();
        const status = row.cells[3].textContent.trim();

        const matchSearch = name.includes(search) || location.includes(search);
        const matchStatus = statusFilter === 'all' || status === statusFilter;

        if (matchSearch && matchStatus) {
            row.style.display = '';
            visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });

    const existing = document.getElementById('noResults');
    if (visibleCount === 0) {
        if (!existing) {
            const tbody = document.getElementById('equipmentBody');
            const tr = document.createElement('tr');
            tr.id = 'noResults';
            tr.innerHTML = `<td colspan="5" class="no-results">No equipment found.</td>`;
            tbody.appendChild(tr);
        }
    } else {
        if (existing) existing.remove();
    }
}
// Hamburger Menu
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
}
window.onload = function() {
    loadEquipment();
    const savedLang = localStorage.getItem('lang') || 'en';
    document.querySelector('.lang-switcher').value = savedLang;
    changeLanguage(savedLang);
}

function saveEquipment() {
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const data = [];
    rows.forEach(row => {
        data.push({
            name: row.cells[0].textContent,
            location: row.cells[1].textContent,
            date: row.cells[2].textContent,
            status: row.cells[3].querySelector('.status').textContent
        });
    });
    localStorage.setItem('equipment', JSON.stringify(data));
}

function loadEquipment() {
    const saved = localStorage.getItem('equipment');
    if (!saved) return;
    
    const data = JSON.parse(saved);
    const tbody = document.getElementById('equipmentBody');
    tbody.innerHTML = '';
    
    data.forEach(item => {
        const statusClass = item.status === 'Active' ? 'good' :
                            item.status === 'Needs Check' ? 'warning' : 'danger';
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.location}</td>
            <td>${item.date}</td>
            <td><span class="status ${statusClass}">${item.status}</span></td>
            <td><button class="delete-btn" onclick="deleteRow(this)">🗑</button></td>
        `;
        tbody.appendChild(row);
    });
    updateStats();
}