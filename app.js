// Chart.js CDN
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = function() {
    initChart();
};
document.head.appendChild(chartScript);

let statusChart = null;

function initChart() {
    const ctx = document.getElementById('statusChart').getContext('2d');
    statusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Active', 'Needs Check', 'Out of Service'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 16,
                        font: { size: 12 },
                        color: '#666'
                    }
                }
            },
            cutout: '70%'
        }
    });
}

function updateChart() {
    if (!statusChart) return;
    const t = translations[currentLang];
    const active = document.querySelectorAll('#equipmentBody .status.good').length;
    const needs = document.querySelectorAll('#equipmentBody .status.warning').length;
    const out = document.querySelectorAll('#equipmentBody .status.danger').length;
    
    statusChart.data.labels = [
        t.chart_active,
        t.chart_needs,
        t.chart_out
    ];
    statusChart.data.datasets[0].data = [active, needs, out];
    statusChart.update();
}
const translations = {
    en: {
        nav_dashboard: "Dashboard", nav_equipment: "Equipment",
        nav_maintenance: "Maintenance", nav_reports: "Reports",
        stat_total: "Total Equipment", stat_maintenance: "Needs Maintenance",
        stat_active: "Active", equipment_title: "Equipment List",
        search_placeholder: "Search equipment...", filter_all: "All Status",
        status_active: "Active", status_needs_check: "Needs Check",
        status_out: "Out of Service", btn_add: "+ Add Equipment",
        modal_title: "Add New Equipment", form_name: "Device Name",
        form_name_ph: "e.g. ECG Monitor", form_location: "Location",
        form_location_ph: "e.g. ICU - Room 3", form_date: "Last Calibration",
        form_status: "Status", btn_cancel: "Cancel", btn_save: "Save Equipment",
        col_device: "Device", col_location: "Location",
        col_date: "Last Calibration", col_status: "Status",
        no_results: "No equipment found.",
        stat_out: "Out of Service",
        chart_title: "Equipment Status Overview",
        chart_active: "Active",
        chart_needs: "Needs Check",
        chart_out: "Out of Service",
        alerts_title: "⚠️ Calibration Alerts",
alert_overdue: "Overdue",
form_next_date: "Next Calibration",
col_next_date: "Next Calibration",
alert_days_ago: "days ago",
btn_export: "⬇ Export CSV",
nav_about: "About",
about_project_title: "About the Project",
about_project_text: "MedTech Tracker is a web-based system for managing medical equipment in clinical environments. It enables healthcare facilities to track device status, monitor calibration schedules, and export records efficiently.",
about_dev_title: "About the Developer",
about_dev_text: "Developed by Mohammad Hassan Abbasi, a Biomedical Engineer with over 8 years of experience in medical device regulation, inspection, and healthcare business management. Currently CEO of Kayazh Medical and pursuing an MSc in Biomedical Engineering in Switzerland.",
about_tech_title: "Tech Stack",
alert_days_left: "days until calibration"
    },
    de: {
        nav_dashboard: "Dashboard", nav_equipment: "Geräte",
        nav_maintenance: "Wartung", nav_reports: "Berichte",
        stat_total: "Geräte gesamt", stat_maintenance: "Wartung erforderlich",
        stat_active: "Aktiv", equipment_title: "Geräteliste",
        search_placeholder: "Gerät suchen...", filter_all: "Alle Status",
        status_active: "Aktiv", status_needs_check: "Prüfung erforderlich",
        status_out: "Außer Betrieb", btn_add: "+ Gerät hinzufügen",
        modal_title: "Neues Gerät hinzufügen", form_name: "Gerätename",
        form_name_ph: "z.B. EKG-Monitor", form_location: "Standort",
        form_location_ph: "z.B. ITS - Zimmer 3", form_date: "Letzte Kalibrierung",
        form_status: "Status", btn_cancel: "Abbrechen", btn_save: "Gerät speichern",
        col_device: "Gerät", col_location: "Standort",
        col_date: "Letzte Kalibrierung", col_status: "Status",
        no_results: "Kein Gerät gefunden.",
        stat_out: "Außer Betrieb",
        chart_title: "Gerätestatusübersicht",
        chart_active: "Aktiv",
        chart_needs: "Prüfung erforderlich",
        chart_out: "Außer Betrieb",
        alerts_title: "⚠️ Kalibrierungswarnungen",
alert_overdue: "Überfällig",
form_next_date: "Nächste Kalibrierung",
col_next_date: "Nächste Kalibrierung",
alert_days_ago: "Tage überfällig",
nav_about: "Über",
about_project_title: "Über das Projekt",
about_project_text: "MedTech Tracker ist ein webbasiertes System zur Verwaltung medizinischer Geräte in klinischen Umgebungen.",
about_dev_title: "Über den Entwickler",
about_dev_text: "Entwickelt von Mohammad Hassan Abbasi, einem Biomediziningenieur mit über 8 Jahren Erfahrung in der Regulierung medizinischer Geräte und im Gesundheitsmanagement.",
about_tech_title: "Technologie",
btn_export: "⬇ CSV exportieren",
alert_days_left: "Tage bis zur Kalibrierung"
    },
    fa: {
        nav_dashboard: "داشبورد", nav_equipment: "تجهیزات",
        nav_maintenance: "نگهداری", nav_reports: "گزارش‌ها",
        stat_total: "کل تجهیزات", stat_maintenance: "نیاز به سرویس",
        stat_active: "فعال", equipment_title: "لیست تجهیزات",
        search_placeholder: "جستجوی تجهیزات...", filter_all: "همه وضعیت‌ها",
        status_active: "فعال", status_needs_check: "نیاز به بررسی",
        status_out: "خارج از سرویس", btn_add: "+ افزودن تجهیز",
        modal_title: "افزودن تجهیز جدید", form_name: "نام دستگاه",
        form_name_ph: "مثلاً مانیتور ECG", form_location: "موقعیت",
        form_location_ph: "مثلاً ICU - اتاق ۳", form_date: "آخرین کالیبراسیون",
        form_status: "وضعیت", btn_cancel: "انصراف", btn_save: "ذخیره تجهیز",
        col_device: "دستگاه", col_location: "موقعیت",
        col_date: "آخرین کالیبراسیون", col_status: "وضعیت",
        no_results: "تجهیزی یافت نشد.",
        stat_out: "خارج از سرویس",
        chart_title: "نمای کلی وضعیت تجهیزات",
        chart_active: "فعال",
        chart_needs: "نیاز به بررسی",
        chart_out: "خارج از سرویس",
        alerts_title: "⚠️ هشدارهای کالیبراسیون",
alert_overdue: "منقضی شده",
form_next_date: "کالیبراسیون بعدی",
col_next_date: "کالیبراسیون بعدی",
alert_days_ago: "روز پیش منقضی شد",
nav_about: "درباره",
about_project_title: "درباره پروژه",
about_project_text: "مدتک ترکر یک سیستم تحت وب برای مدیریت تجهیزات پزشکی در محیط‌های بالینی است. این سیستم به مراکز درمانی کمک می‌کند وضعیت دستگاه‌ها را پیگیری کنند و برنامه کالیبراسیون را مدیریت نمایند.",
about_dev_title: "درباره توسعه‌دهنده",
about_dev_text: "توسعه داده شده توسط محمدحسن عباسی، مهندس پزشکی با بیش از ۸ سال تجربه در حوزه نظارت بر تجهیزات پزشکی و مدیریت کسب‌وکار سلامت. مدیرعامل شرکت کایاژ و متقاضی ارشد مهندسی پزشکی در سوئیس.",
about_tech_title: "تکنولوژی‌ها",
btn_export: "⬇ دانلود CSV",
alert_days_left: "روز تا کالیبراسیون"
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
    document.querySelectorAll('[data-status-key]').forEach(el => {
        const key = el.getAttribute('data-status-key');
        if (t[key]) el.textContent = t[key];
    });
    localStorage.setItem('lang', lang);
    updateChart();
    checkCalibrationAlerts();
}

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

function toggleModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.toggle('active');
    if (!overlay.classList.contains('active')) {
        clearForm();
        document.querySelector('.save-btn').onclick = addEquipment;
    }
}

function clearForm() {
    document.getElementById('deviceName').value = '';
    document.getElementById('deviceLocation').value = '';
    document.getElementById('deviceDate').value = '';
    document.getElementById('deviceNextDate').value = '';
    document.getElementById('deviceStatus').value = 'Active';
}

function createRow(name, location, date, nextDate, status) {
    const statusClass = status === 'Active' || status === 'Aktiv' || status === 'فعال' ? 'good' :
                        status === 'Needs Check' || status === 'Prüfung erforderlich' || status === 'نیاز به بررسی' ? 'warning' : 'danger';
    const t = translations[currentLang];
    const statusKey = statusClass === 'good' ? 'status_active' :
                      statusClass === 'warning' ? 'status_needs_check' : 'status_out';
    const row = document.createElement('tr');
    row.innerHTML = `
        <td data-label="${t.col_device}">${name}</td>
        <td data-label="${t.col_location}">${location}</td>
        <td data-label="${t.col_date}">${date}</td>
        <td data-label="${t.col_next_date}">${nextDate || '-'}</td>
        <td data-label="${t.col_status}"><span class="status ${statusClass}" data-status-key="${statusKey}">${t[statusKey]}</span></td>
        <td class="action-btns">
            <button class="edit-btn" onclick="editRow(this)">✏️</button>
            <button class="delete-btn" onclick="deleteRow(this)">🗑</button>
        </td>
    `;
    return row;
}

function addEquipment() {
    const name = document.getElementById('deviceName').value.trim();
    const location = document.getElementById('deviceLocation').value.trim();
    const date = document.getElementById('deviceDate').value;
    const nextDate = document.getElementById('deviceNextDate').value;
    const status = document.getElementById('deviceStatus').value;

    if (!name || !location || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const tbody = document.getElementById('equipmentBody');
    const row = createRow(name, location, date, nextDate, status);
    tbody.appendChild(row);

    updateStats();
    saveEquipment();
    toggleModal();
}

function editRow(btn) {
    const row = btn.closest('tr');
    const cells = row.cells;

    document.getElementById('deviceName').value = cells[0].textContent;
    document.getElementById('deviceLocation').value = cells[1].textContent;
    document.getElementById('deviceDate').value = cells[2].textContent;
    document.getElementById('deviceNextDate').value = cells[3].textContent === '-' ? '' : cells[3].textContent;
    document.getElementById('deviceStatus').value = cells[4].querySelector('.status').textContent.trim();

    document.querySelector('.save-btn').onclick = function() {
        saveEdit(row);
    };

    toggleModal();
}

function saveEdit(row) {
    const name = document.getElementById('deviceName').value.trim();
    const location = document.getElementById('deviceLocation').value.trim();
    const date = document.getElementById('deviceDate').value;
    const nextDate = document.getElementById('deviceNextDate').value;
    const status = document.getElementById('deviceStatus').value;

    if (!name || !location || !date) {
        alert('Please fill in all fields.');
        return;
    }

    const statusClass = status === 'Active' || status === 'Aktiv' || status === 'فعال' ? 'good' :
                        status === 'Needs Check' || status === 'Prüfung erforderlich' || status === 'نیاز به بررسی' ? 'warning' : 'danger';
    const statusKey = statusClass === 'good' ? 'status_active' :
                      statusClass === 'warning' ? 'status_needs_check' : 'status_out';
    const t = translations[currentLang];

    row.cells[0].textContent = name;
    row.cells[1].textContent = location;
    row.cells[2].textContent = date;
    row.cells[3].textContent = nextDate || '-';
    row.cells[4].innerHTML = `<span class="status ${statusClass}" data-status-key="${statusKey}">${t[statusKey]}</span>`;

    document.querySelector('.save-btn').onclick = addEquipment;

    updateStats();
    saveEquipment();
    toggleModal();
}

function deleteRow(btn) {
    btn.closest('tr').remove();
    updateStats();
    saveEquipment();
}

function updateStats() {
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const total = rows.length;
    const active = document.querySelectorAll('#equipmentBody .status.good').length;
    const needsCheck = document.querySelectorAll('#equipmentBody .status.warning').length;
    const outOfService = document.querySelectorAll('#equipmentBody .status.danger').length;

    document.getElementById('statTotal').textContent = total;
    document.getElementById('statActive').textContent = active;
    document.getElementById('statNeeds').textContent = needsCheck;
    document.getElementById('statOut').textContent = outOfService;
        updateChart();
        checkCalibrationAlerts();
}

function saveEquipment() {
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const data = [];
    rows.forEach(row => {
        data.push({
            name: row.cells[0].textContent,
            location: row.cells[1].textContent,
            date: row.cells[2].textContent,
            nextDate: row.cells[3].textContent,
            status: row.cells[4].querySelector('.status').textContent.trim()
        });
    });
    localStorage.setItem('equipment', JSON.stringify(data));
}

function loadEquipment() {
    const saved = localStorage.getItem('equipment');
    if (!saved) {
        const defaultData = [
            { name: "ECG Monitor", location: "ICU - Room 3", date: "2024-06-01", nextDate: "2025-06-01", status: "Active" },
            { name: "Patient Monitor", location: "Emergency", date: "2023-09-05", nextDate: "2024-09-05", status: "Needs Check" },
            { name: "Surgical Suction", location: "OR - Room 1", date: "2025-01-20", nextDate: "2026-07-20", status: "Active" },
            { name: "Dental Unit", location: "Dental Clinic", date: "2024-03-10", nextDate: "2025-03-10", status: "Out of Service" },
            { name: "Pulse Oximeter", location: "Ward B", date: "2025-05-01", nextDate: "2026-05-01", status: "Active" }
        ];
        localStorage.setItem('equipment', JSON.stringify(defaultData));
        defaultData.forEach(item => {
            const row = createRow(item.name, item.location, item.date, item.nextDate, item.status);
            document.getElementById('equipmentBody').appendChild(row);
        });
        updateStats();
        return;
    }

    const data = JSON.parse(saved);
    const tbody = document.getElementById('equipmentBody');
    tbody.innerHTML = '';

    data.forEach(item => {
        const row = createRow(item.name, item.location, item.date, item.nextDate || '-', item.status);
        tbody.appendChild(row);
    });

    updateStats();
}

function filterTable() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const statusFilter = document.getElementById('statusFilter').value;
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    let visibleCount = 0;

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const location = row.cells[1].textContent.toLowerCase();
        const statusEl = row.cells[4].querySelector('.status');
        const statusKey = statusEl ? statusEl.getAttribute('data-status-key') : '';

        const statusMap = {
            'Active': 'status_active',
            'Needs Check': 'status_needs_check',
            'Out of Service': 'status_out'
        };

        const matchSearch = name.includes(search) || location.includes(search);
        const matchStatus = statusFilter === 'all' || statusMap[statusFilter] === statusKey;

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
            tr.innerHTML = `<td colspan="6" class="no-results">${translations[currentLang].no_results}</td>`;
            tbody.appendChild(tr);
        }
    } else {
        if (existing) existing.remove();
    }
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
}

window.onload = function() {
    const savedLang = localStorage.getItem('lang') || 'en';
    document.querySelector('.lang-switcher').value = savedLang;
    currentLang = savedLang;
    loadEquipment();
    changeLanguage(savedLang);
}
function checkCalibrationAlerts() {
    const t = translations[currentLang];
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const alertsList = document.getElementById('alertsList');
    const alertsSection = document.getElementById('alertsSection');

    alertsList.innerHTML = '';
    let alertCount = 0;

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const nextDateStr = row.cells[3].textContent;
        if (!nextDateStr || nextDateStr === '-') return;

        const nextDate = new Date(nextDateStr);
        const diffTime = nextDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) {
            const li = document.createElement('li');
            li.innerHTML = `<span>🔴</span> <span class="alert-overdue">${name} — ${t.alert_overdue} (${Math.abs(diffDays)} ${t.alert_days_ago})</span>`;
            alertsList.appendChild(li);
            alertCount++;
        } else if (diffDays <= 30) {
            const li = document.createElement('li');
            li.innerHTML = `<span>🟡</span> <span>${name} — ${diffDays} ${t.alert_days_left}</span>`;
            alertsList.appendChild(li);
            alertCount++;
        }
    });

    alertsSection.style.display = alertCount > 0 ? 'block' : 'none';
}
function exportCSV() {
    const t = translations[currentLang];
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    
    const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');

    if (visibleRows.length === 0) {
        alert(t.no_results);
        return;
    }

    const headers = [
        t.col_device,
        t.col_location,
        t.col_date,
        t.col_next_date,
        t.col_status
    ];

    let csv = headers.join(',') + '\n';

    visibleRows.forEach(row => {
        const cols = [
            row.cells[0].textContent,
            row.cells[1].textContent,
            row.cells[2].textContent,
            row.cells[3].textContent,
            row.cells[4].querySelector('.status').textContent.trim()
        ];
        csv += cols.map(c => `"${c}"`).join(',') + '\n';
    });

    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `medtech-export-${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
}
function showPage(page) {
    document.getElementById('page-dashboard').style.display = page === 'dashboard' ? 'block' : 'none';
    document.getElementById('page-about').style.display = page === 'about' ? 'block' : 'none';

    document.querySelectorAll('#mainNav a').forEach(a => {
        a.classList.remove('active-nav');
    });
    event.target.classList.add('active-nav');
}