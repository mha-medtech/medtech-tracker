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
        loading: "Loading your equipment...",
        form_purchase: "Purchase Date",
form_warranty: "Warranty Expiry",
col_warranty: "Warranty",
warranty_ok: "Valid",
warranty_expiring: "Expiring soon",
warranty_expired: "Expired",
alert_warranty_expired: "Warranty expired",
alert_warranty_expiring: "days until warranty expires",
        warranty_alerts_title: "🛡️ Warranty Alerts",
        nav_warranty: "Warranty",
nav_maintenance: "Maintenance",
nav_reports: "Reports",
warranty_page_title: "Warranty Management",
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
        loading: "Geräte werden geladen...",
        form_purchase: "Kaufdatum",
form_warranty: "Garantieablauf",
col_warranty: "Garantie",
warranty_ok: "Gültig",
warranty_expiring: "Läuft bald ab",
warranty_expired: "Abgelaufen",
alert_warranty_expired: "Garantie abgelaufen",
alert_warranty_expiring: "Tage bis Garantieablauf",
        warranty_alerts_title: "🛡️ Garantiewarnungen",
        nav_warranty: "Garantie",
nav_maintenance: "Wartung",
nav_reports: "Berichte",
warranty_page_title: "Garantieverwaltung",
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
        loading: "در حال بارگذاری تجهیزات...",
        form_purchase: "تاریخ خرید",
form_warranty: "انقضای گارانتی",
col_warranty: "گارانتی",
warranty_ok: "معتبر",
warranty_expiring: "به زودی منقضی",
warranty_expired: "منقضی شده",
alert_warranty_expired: "گارانتی منقضی شده",
alert_warranty_expiring: "روز تا انقضای گارانتی",
        warranty_alerts_title: "🛡️ هشدارهای گارانتی",
        nav_warranty: "گارانتی",
nav_maintenance: "تعمیرات",
nav_reports: "گزارش‌ها",
warranty_page_title: "مدیریت گارانتی",
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
    setLang(lang);
    updateChart();
    updateWarrantyBadges();
    checkCalibrationAlerts();
    checkWarrantyAlerts();
    updateWarrantyBadges();
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        const logoutLabels = { en: 'Sign out', de: 'Abmelden', fa: 'خروج' };
        logoutBtn.textContent = logoutLabels[lang] || 'Sign out';
    }
    const welcomeMsg = document.getElementById('welcomeMsg');
    if (welcomeMsg) {
        const user = getUser();
        if (user) {
            const welcomeLabels = {
                en: `Welcome, ${user.name}`,
                de: `Willkommen, ${user.name}`,
                fa: `خوش آمدید، ${user.name}`
            };
            welcomeMsg.textContent = welcomeLabels[lang] || `Welcome, ${user.name}`;
        }
    }
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
    document.getElementById('devicePurchase').value = '';
    document.getElementById('deviceWarranty').value = '';
}

function createRow(name, location, date, nextDate, status, dbId = null, purchase = null, warranty = null) {
    const statusClass = status === 'Active' || status === 'Aktiv' || status === 'فعال' ? 'good' :
                        status === 'Needs Check' || status === 'Prüfung erforderlich' || status === 'نیاز به بررسی' ? 'warning' : 'danger';
    const t = translations[currentLang];
    const statusKey = statusClass === 'good' ? 'status_active' :
                      statusClass === 'warning' ? 'status_needs_check' : 'status_out';

    let warrantyBadge = '-';
    if (warranty && warranty !== '-' && warranty !== 'null') {
        const today = new Date();
        today.setHours(0,0,0,0);
        const wDate = new Date(warranty);
        const diff = Math.ceil((wDate - today) / (1000 * 60 * 60 * 24));

        if (diff < 0) {
            warrantyBadge = `<span class="status danger">${t.warranty_expired}</span>`;
        } else if (diff <= 30) {
            warrantyBadge = `<span class="status warning">${t.warranty_expiring}</span>`;
        } else {
            warrantyBadge = `<span class="status good">${t.warranty_ok}</span>`;
        }
    }

    const row = document.createElement('tr');
    if (dbId) row.setAttribute('data-id', dbId);
    if (purchase) row.setAttribute('data-purchase', purchase);
    if (warranty) row.setAttribute('data-warranty', warranty);

    row.innerHTML = `
        <td data-label="${t.col_device}">${name}</td>
        <td data-label="${t.col_location}">${location}</td>
        <td data-label="${t.col_date}">${date}</td>
        <td data-label="${t.col_next_date}">${nextDate || '-'}</td>
        <td data-label="${t.col_status}"><span class="status ${statusClass}" data-status-key="${statusKey}">${t[statusKey]}</span></td>
        <td data-label="${t.col_warranty}">${warrantyBadge}</td>
        <td class="action-btns">
            <button class="edit-btn" onclick="editRow(this)">✏️</button>
            <button class="delete-btn" onclick="deleteRow(this)">🗑</button>
        </td>
    `;
    return row;
}

async function addEquipment() {
    const user = getUser();
    if (!user) return;

    const name = document.getElementById('deviceName').value.trim();
    const location = document.getElementById('deviceLocation').value.trim();
    const date = document.getElementById('deviceDate').value;
    const nextDate = document.getElementById('deviceNextDate').value;
    const status = document.getElementById('deviceStatus').value;
    const purchase = document.getElementById('devicePurchase').value;
    const warranty = document.getElementById('deviceWarranty').value;

    if (!name || !location || !date) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const res = await fetch(`${API}/equipment/add.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                name, location,
                last_calibration: date,
                next_calibration: nextDate || null,
                status,
                purchase_date: purchase || null,
                warranty_expiry: warranty || null
            })
        });

        const data = await res.json();

        if (data.success) {
            const tbody = document.getElementById('equipmentBody');
            const row = createRow(name, location, date, nextDate || '-', status, data.id, purchase, warranty);
            tbody.appendChild(row);
            updateStats();
            toggleModal();
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert('Connection error. Please try again.');
    }
}

function editRow(btn) {
    const row = btn.closest('tr');
    const cells = row.cells;

    document.getElementById('deviceName').value = cells[0].textContent;
    document.getElementById('deviceLocation').value = cells[1].textContent;
    document.getElementById('deviceDate').value = cells[2].textContent;
    document.getElementById('deviceNextDate').value = cells[3].textContent === '-' ? '' : cells[3].textContent;
    document.getElementById('deviceStatus').value = cells[4].querySelector('.status').textContent.trim();
    document.getElementById('devicePurchase').value = row.getAttribute('data-purchase') || '';
    document.getElementById('deviceWarranty').value = row.getAttribute('data-warranty') || '';

    document.querySelector('.save-btn').onclick = function() {
        saveEdit(row);
    };

    toggleModal();
}

async function saveEdit(row) {
    const user = getUser();
    if (!user) return;

    const name = document.getElementById('deviceName').value.trim();
    const location = document.getElementById('deviceLocation').value.trim();
    const date = document.getElementById('deviceDate').value;
    const nextDate = document.getElementById('deviceNextDate').value;
    const status = document.getElementById('deviceStatus').value;
    const purchase = document.getElementById('devicePurchase').value;
    const warranty = document.getElementById('deviceWarranty').value;
    const dbId = row.getAttribute('data-id');

    if (!name || !location || !date) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const res = await fetch(`${API}/equipment/edit.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: dbId,
                user_id: user.id,
                name, location,
                last_calibration: date,
                next_calibration: nextDate || null,
                status,
                purchase_date: purchase || null,
                warranty_expiry: warranty || null
            })
        });

        const data = await res.json();

        if (data.success) {
            const newRow = createRow(name, location, date, nextDate || '-', status, dbId, purchase, warranty);
            row.replaceWith(newRow);
            document.querySelector('.save-btn').onclick = addEquipment;
            updateStats();
            toggleModal();
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert('Connection error. Please try again.');
    }
}

async function deleteRow(btn) {
    const user = getUser();
    if (!user) return;

    const row = btn.closest('tr');
    const dbId = row.getAttribute('data-id');

    if (!dbId) {
        row.remove();
        updateStats();
        return;
    }

    try {
        const res = await fetch(`${API}/equipment/delete.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: dbId, user_id: user.id })
        });

        const data = await res.json();

        if (data.success) {
            row.remove();
            updateStats();
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert('Connection error. Please try again.');
    }
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
    checkWarrantyAlerts();
}

const API = 'https://medtracker.freedev.app/api';

async function loadEquipment() {
    const user = getUser();
    if (!user) return;

    showSpinner();

    try {
        const res = await fetch(`${API}/equipment/get.php?user_id=${user.id}`);
        const data = await res.json();

        if (!data.success) {
            hideSpinner();
            return;
        }

        const tbody = document.getElementById('equipmentBody');
        tbody.innerHTML = '';

        if (data.data.length === 0) {
            loadDefaultData();
            hideSpinner();
            return;
        }

        data.data.forEach(item => {
            const row = createRow(
                item.name,
                item.location,
                item.last_calibration,
                item.next_calibration || '-',
                item.status,
                item.id,
                item.purchase_date || null,
                item.warranty_expiry || null
            );
            tbody.appendChild(row);
        });

        updateStats();
        hideSpinner();

    } catch (err) {
        console.error('Load error:', err);
        loadDefaultData();
        hideSpinner();
    }
}

function showSpinner() {
    const overlay = document.getElementById('spinnerOverlay');
    const text = document.getElementById('spinnerText');
    if (overlay) overlay.classList.remove('hidden');
    if (text) {
        const t = translations[currentLang];
        text.textContent = t && t.loading ? t.loading : 'Loading...';
    }
}

function hideSpinner() {
    const overlay = document.getElementById('spinnerOverlay');
    if (overlay) overlay.classList.add('hidden');
}

async function saveEquipment() {
    // دیگه نیازی به save نیست — هر عملیات مستقیم به API میره
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
    const savedLang = getLang();
    const langSwitcher = document.querySelector('.lang-switcher');
    if (langSwitcher) langSwitcher.value = savedLang;
    currentLang = savedLang;

    const user = getUser();
    if (user) {
        const avatar = document.getElementById('userAvatar');
        const userName = document.getElementById('userName');
        const userClinic = document.getElementById('userClinic');
        const welcomeMsg = document.getElementById('welcomeMsg');
    if (welcomeMsg && user) {
        const welcomeLabels = {
            en: `Welcome, ${user.name}`,
            de: `Willkommen, ${user.name}`,
            fa: `خوش آمدید، ${user.name}`
        };
        welcomeMsg.textContent = welcomeLabels[savedLang] || `Welcome, ${user.name}`;
    }

        if (avatar) avatar.textContent = user.name.charAt(0).toUpperCase();
        if (userName) userName.textContent = user.name;
        if (userClinic) userClinic.textContent = user.clinic_name;
    }

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
const pageTitles = {
    en: { dashboard: 'Dashboard', equipment: 'Equipment', warranty: 'Warranty Management', about: 'About' },
    de: { dashboard: 'Dashboard', equipment: 'Geräte', warranty: 'Garantieverwaltung', about: 'Über' },
    fa: { dashboard: 'داشبورد', equipment: 'تجهیزات', warranty: 'مدیریت گارانتی', about: 'درباره' }
};

function showPage(page) {
    const pages = ['dashboard', 'equipment', 'warranty', 'about'];
    pages.forEach(p => {
        const el = document.getElementById(`page-${p}`);
        if (el) el.style.display = p === page ? 'block' : 'none';
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    const titles = pageTitles[currentLang] || pageTitles['en'];
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = titles[page] || page;

    if (page === 'warranty') updateWarrantyPage();
    if (window.innerWidth <= 768) closeSidebar();
}

function updateWarrantyBadges() {
    const t = translations[currentLang];
    const today = new Date();
    today.setHours(0,0,0,0);

    document.querySelectorAll('#equipmentBody tr').forEach(row => {
        const warranty = row.getAttribute('data-warranty');
        if (!warranty || warranty === '-' || warranty === 'null') return;

        const wDate = new Date(warranty);
        const diff = Math.ceil((wDate - today) / (1000 * 60 * 60 * 24));
        const cell = row.cells[5];
        if (!cell) return;

        if (diff < 0) {
            cell.innerHTML = `<span class="status danger">${t.warranty_expired}</span>`;
        } else if (diff <= 30) {
            cell.innerHTML = `<span class="status warning">${t.warranty_expiring}</span>`;
        } else {
            cell.innerHTML = `<span class="status good">${t.warranty_ok}</span>`;
        }
    });
}
function checkWarrantyAlerts() {
    const t = translations[currentLang];
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const today = new Date();
    today.setHours(0,0,0,0);
    const list = document.getElementById('warrantyAlertsList');
    const section = document.getElementById('warrantyAlertsSection');

    list.innerHTML = '';
    let count = 0;

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const warranty = row.getAttribute('data-warranty');
        if (!warranty || warranty === '-' || warranty === 'null') return;

        const wDate = new Date(warranty);
        const diff = Math.ceil((wDate - today) / (1000 * 60 * 60 * 24));

        if (diff < 0) {
            const li = document.createElement('li');
            li.innerHTML = `<span>🔴</span> <span class="alert-overdue">${name} — ${t.warranty_expired} (${Math.abs(diff)} ${t.alert_days_ago})</span>`;
            list.appendChild(li);
            count++;
        } else if (diff <= 30) {
            const li = document.createElement('li');
            li.innerHTML = `<span>🟡</span> <span>${name} — ${diff} ${t.alert_warranty_expiring}</span>`;
            list.appendChild(li);
            count++;
        }
    });

    section.style.display = count > 0 ? 'block' : 'none';
}
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}
function updateWarrantyPage() {
    const t = translations[currentLang];
    const today = new Date();
    today.setHours(0,0,0,0);
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const tbody = document.getElementById('warrantyBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const location = row.cells[1].textContent;
        const purchase = row.getAttribute('data-purchase') || '-';
        const warranty = row.getAttribute('data-warranty') || '-';

        let warrantyBadge = '-';
        if (warranty && warranty !== '-' && warranty !== 'null') {
            const wDate = new Date(warranty);
            const diff = Math.ceil((wDate - today) / (1000 * 60 * 60 * 24));
            if (diff < 0) {
                warrantyBadge = `<span class="status danger">${t.warranty_expired}</span>`;
            } else if (diff <= 30) {
                warrantyBadge = `<span class="status warning">${t.warranty_expiring} (${diff}d)</span>`;
            } else {
                warrantyBadge = `<span class="status good">${t.warranty_ok}</span>`;
            }
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${name}</td>
            <td>${location}</td>
            <td>${purchase}</td>
            <td>${warranty}</td>
            <td>${warrantyBadge}</td>
        `;
        tbody.appendChild(tr);
    });
}