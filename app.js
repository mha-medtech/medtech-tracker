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
        maintenance_title: "Repair History",
repair_select_device: "Select device...",
repair_select_prompt: "Select a device to view its repair history.",
btn_add_repair: "+ Add Repair",
repair_modal_title: "Add Repair Record",
repair_device: "Device",
repair_date: "Repair Date",
repair_problem_type: "Problem Type",
repair_status_after: "Status After",
repair_technician: "Technician / Company",
repair_cost: "Cost",
repair_problem_desc: "Problem Description",
repair_action: "Action Taken",
repair_invoice: "Invoice Number",
btn_save_repair: "Save Record",
prob_electrical: "Electrical",
prob_mechanical: "Mechanical",
prob_software: "Software",
prob_calibration: "Calibration",
prob_periodic: "Periodic Service",
repair_resolved: "Resolved",
repair_followup: "Needs Follow-up",
repair_vendor: "Referred to Vendor",
        ios_install_title: "Install MedTech Tracker",
ios_install_desc: "Tap Share → Add to Home Screen for the best experience",
repair_no_records: "No repair records found.",
        nav_settings: "Settings",
settings_profile: "Profile Information",
settings_name: "Full Name",
settings_clinic: "Clinic Name",
settings_phone: "Phone",
settings_city: "City",
settings_address: "Address",
settings_save: "Save Changes",
settings_password: "Change Password",
settings_current_pass: "Current Password",
settings_new_pass: "New Password",
settings_save_pass: "Update Password",
settings_danger: "Danger Zone",
settings_logout_all: "Sign out from all devices",
        quick_actions: "Quick Actions",
qa_add_equipment: "Add Equipment",
qa_add_repair: "Log Repair",
qa_view_equipment: "View Equipment",
        upcoming_title: "Upcoming Calibrations",
upcoming_empty: "No upcoming calibrations in the next 30 days.",
upcoming_days_left: "days left",
upcoming_today: "Today",
        report_summary: "Summary",
report_total_repairs: "Total Repairs",
report_warranty_expiring: "Warranty Expiring Soon",
report_warranty_status: "Warranty Status",
report_repair_cost: "Repair Costs",
report_days_left: "Days Left",
upcoming_tomorrow: "Tomorrow",
qa_view_warranty: "Warranty Status",
settings_signout: "Sign out",
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
        maintenance_title: "Reparaturverlauf",
repair_select_device: "Gerät auswählen...",
repair_select_prompt: "Wählen Sie ein Gerät aus, um den Reparaturverlauf anzuzeigen.",
btn_add_repair: "+ Reparatur hinzufügen",
repair_modal_title: "Reparaturdatensatz hinzufügen",
repair_device: "Gerät",
repair_date: "Reparaturdatum",
repair_problem_type: "Problemtyp",
repair_status_after: "Status danach",
        report_summary: "Zusammenfassung",
report_total_repairs: "Reparaturen gesamt",
report_warranty_expiring: "Garantie läuft bald ab",
report_warranty_status: "Garantiestatus",
report_repair_cost: "Reparaturkosten",
report_days_left: "Verbleibende Tage",
repair_technician: "Techniker / Unternehmen",
repair_cost: "Kosten",
repair_problem_desc: "Problembeschreibung",
repair_action: "Durchgeführte Maßnahme",
repair_invoice: "Rechnungsnummer",
btn_save_repair: "Datensatz speichern",
prob_electrical: "Elektrisch",
prob_mechanical: "Mechanisch",
prob_software: "Software",
prob_calibration: "Kalibrierung",
prob_periodic: "Periodischer Service",
repair_resolved: "Gelöst",
repair_followup: "Nachverfolgung erforderlich",
        ios_install_title: "MedTech Tracker installieren",
ios_install_desc: "Tippen Sie auf Teilen → Zum Home-Bildschirm für die beste Erfahrung",
repair_vendor: "An Händler weitergeleitet",
repair_no_records: "Keine Reparaturdaten gefunden.",
        nav_settings: "Einstellungen",
settings_profile: "Profilinformationen",
settings_name: "Vollständiger Name",
settings_clinic: "Klinikname",
settings_phone: "Telefon",
settings_city: "Stadt",
settings_address: "Adresse",
settings_save: "Änderungen speichern",
settings_password: "Passwort ändern",
settings_current_pass: "Aktuelles Passwort",
settings_new_pass: "Neues Passwort",
settings_save_pass: "Passwort aktualisieren",
settings_danger: "Gefahrenzone",
settings_logout_all: "Von allen Geräten abmelden",
        quick_actions: "Schnellaktionen",
qa_add_equipment: "Gerät hinzufügen",
qa_add_repair: "Reparatur erfassen",
qa_view_equipment: "Geräte anzeigen",
        upcoming_title: "Bevorstehende Kalibrierungen",
upcoming_empty: "Keine bevorstehenden Kalibrierungen in den nächsten 30 Tagen.",
upcoming_days_left: "Tage verbleibend",
upcoming_today: "Heute",
upcoming_tomorrow: "Morgen",
qa_view_warranty: "Garantiestatus",
settings_signout: "Abmelden",
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
        maintenance_title: "تاریخچه تعمیرات",
repair_select_device: "دستگاه را انتخاب کنید...",
repair_select_prompt: "یک دستگاه انتخاب کنید تا تاریخچه تعمیرات آن نمایش داده شود.",
btn_add_repair: "+ افزودن تعمیر",
repair_modal_title: "افزودن سابقه تعمیر",
repair_device: "دستگاه",
repair_date: "تاریخ تعمیر",
repair_problem_type: "نوع مشکل",
repair_status_after: "وضعیت بعد از تعمیر",
repair_technician: "تکنسین / شرکت",
repair_cost: "هزینه",
repair_problem_desc: "توضیحات مشکل",
repair_action: "اقدام انجام شده",
repair_invoice: "شماره فاکتور",
btn_save_repair: "ذخیره سابقه",
prob_electrical: "برقی",
prob_mechanical: "مکانیکی",
prob_software: "نرم‌افزاری",
prob_calibration: "کالیبراسیون",
prob_periodic: "سرویس دوره‌ای",
repair_resolved: "حل شد",
repair_followup: "نیاز به پیگیری",
repair_vendor: "ارجاع به نمایندگی",
        ios_install_title: "نصب مدتک ترکر",
ios_install_desc: "برای بهترین تجربه: Share → Add to Home Screen را بزنید",
repair_no_records: "سابقه تعمیری یافت نشد.",
        nav_settings: "تنظیمات",
settings_profile: "اطلاعات پروفایل",
settings_name: "نام کامل",
settings_clinic: "نام کلینیک",
settings_phone: "تلفن",
settings_city: "شهر",
settings_address: "آدرس",
settings_save: "ذخیره تغییرات",
settings_password: "تغییر رمز عبور",
settings_current_pass: "رمز عبور فعلی",
settings_new_pass: "رمز عبور جدید",
settings_save_pass: "بروزرسانی رمز عبور",
settings_danger: "منطقه خطر",
settings_logout_all: "خروج از همه دستگاه‌ها",
settings_signout: "خروج",
        quick_actions: "دسترسی سریع",
qa_add_equipment: "افزودن تجهیز",
qa_add_repair: "ثبت تعمیر",
qa_view_equipment: "مشاهده تجهیزات",
        upcoming_title: "کالیبراسیون‌های پیش رو",
        report_summary: "خلاصه",
report_total_repairs: "کل تعمیرات",
report_warranty_expiring: "گارانتی در حال انقضا",
report_warranty_status: "وضعیت گارانتی",
report_repair_cost: "هزینه تعمیرات",
report_days_left: "روز مانده",
upcoming_empty: "کالیبراسیونی در ۳۰ روز آینده وجود ندارد.",
upcoming_days_left: "روز مانده",
upcoming_today: "امروز",
upcoming_tomorrow: "فردا",
qa_view_warranty: "وضعیت گارانتی",
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
    updateUpcomingCalibrations();
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
    updateUpcomingCalibrations();
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
    checkIOSInstall();
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
    en: { dashboard: 'Dashboard', equipment: 'Equipment', warranty: 'Warranty Management', maintenance: 'Repair History', settings: 'Settings', reports: 'Reports', about: 'About' },
    de: { dashboard: 'Dashboard', equipment: 'Geräte', warranty: 'Garantieverwaltung', maintenance: 'Reparaturverlauf', settings: 'Einstellungen', reports: 'Berichte', about: 'Über' },
    fa: { dashboard: 'داشبورد', equipment: 'تجهیزات', warranty: 'مدیریت گارانتی', maintenance: 'تاریخچه تعمیرات', settings: 'تنظیمات', reports: 'گزارش‌ها', about: 'درباره' }
};

function showPage(page) {
const pages = ['dashboard', 'equipment', 'warranty', 'maintenance', 'settings', 'reports', 'about'];
    pages.forEach(p => {
        const el = document.getElementById(`page-${p}`);
        if (el) {
            if (p === page) {
                el.style.display = 'block';
                el.style.flex = 'none';
            } else {
                el.style.display = 'none';
                el.style.flex = 'none';
            }
        }
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    const titles = pageTitles[currentLang] || pageTitles['en'];
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = titles[page] || page;
    if (page === 'warranty') updateWarrantyPage();
    if (page === 'maintenance') populateRepairDevices();
    if (page === 'settings') loadSettings();
    if (page === 'reports') loadReports();
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

// REPAIRS

function toggleRepairModal() {
    const overlay = document.getElementById('repairModalOverlay');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        populateRepairDevices();
    }
}

function populateRepairDevices() {
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const select = document.getElementById('repairDevice');
    const filterSelect = document.getElementById('repairEquipmentFilter');
    if (!select) return;

    select.innerHTML = '';
    if (filterSelect) filterSelect.innerHTML = `<option value="">${translations[currentLang].repair_select_device}</option>`;

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const id = row.getAttribute('data-id');
        if (!id) return;

        const opt = document.createElement('option');
        opt.value = id;
        opt.textContent = name;
        select.appendChild(opt);

        if (filterSelect) {
            const opt2 = opt.cloneNode(true);
            filterSelect.appendChild(opt2);
        }
    });
}

async function loadRepairs() {
    const user = getUser();
    if (!user) return;

    const equipmentId = document.getElementById('repairEquipmentFilter').value;
    const container = document.getElementById('repairsList');
    const t = translations[currentLang];

    if (!equipmentId) {
        container.innerHTML = `<div class="no-results">${t.repair_select_prompt}</div>`;
        return;
    }

    container.innerHTML = `<div class="no-results">Loading...</div>`;

    try {
        const res = await fetch(`${API}/repairs/get.php?equipment_id=${equipmentId}&user_id=${user.id}`);
        const data = await res.json();

        if (!data.success || data.data.length === 0) {
            container.innerHTML = `<div class="no-results">${t.repair_no_records}</div>`;
            return;
        }

        container.innerHTML = '';
        data.data.forEach(repair => {
            const card = document.createElement('div');
            card.className = 'repair-card';
            card.setAttribute('data-repair-id', repair.id);
            card.innerHTML = `
                <div class="repair-card-header">
                    <div class="repair-meta">
                        <span class="repair-date">📅 ${repair.repair_date}</span>
                        <span class="repair-type">${repair.problem_type}</span>
                        <span class="status ${repair.status_after === 'Resolved' ? 'good' : repair.status_after === 'Needs Follow-up' ? 'warning' : 'danger'}">${repair.status_after}</span>
                    </div>
                    <button class="delete-btn" onclick="deleteRepair(${repair.id})">🗑</button>
                </div>
                <div class="repair-card-body">
                    <div class="repair-field"><strong>${t.repair_problem_desc}:</strong> ${repair.problem_desc}</div>
                    <div class="repair-field"><strong>${t.repair_action}:</strong> ${repair.action_taken}</div>
                    ${repair.technician ? `<div class="repair-field"><strong>${t.repair_technician}:</strong> ${repair.technician}</div>` : ''}
                    ${repair.cost > 0 ? `<div class="repair-field"><strong>${t.repair_cost}:</strong> ${repair.cost}</div>` : ''}
                    ${repair.invoice_number ? `<div class="repair-field"><strong>${t.repair_invoice}:</strong> ${repair.invoice_number}</div>` : ''}
                </div>
            `;
            container.appendChild(card);
        });

    } catch (err) {
        container.innerHTML = `<div class="no-results">Connection error.</div>`;
    }
}

async function addRepair() {
    const user = getUser();
    if (!user) return;

    const equipment_id = document.getElementById('repairDevice').value;
    const repair_date = document.getElementById('repairDate').value;
    const problem_type = document.getElementById('repairProblemType').value;
    const problem_desc = document.getElementById('repairProblemDesc').value.trim();
    const action_taken = document.getElementById('repairActionTaken').value.trim();
    const technician = document.getElementById('repairTechnician').value.trim();
    const cost = document.getElementById('repairCost').value || 0;
    const status_after = document.getElementById('repairStatusAfter').value;
    const invoice_number = document.getElementById('repairInvoice').value.trim();

    if (!equipment_id || !repair_date || !problem_desc || !action_taken) {
        alert('Please fill in required fields.');
        return;
    }

    try {
        const res = await fetch(`${API}/repairs/add.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                equipment_id, user_id: user.id,
                repair_date, problem_type, problem_desc,
                action_taken, technician, cost,
                status_after, invoice_number
            })
        });

        const data = await res.json();

        if (data.success) {
            toggleRepairModal();
            document.getElementById('repairEquipmentFilter').value = equipment_id;
            loadRepairs();
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert('Connection error.');
    }
}

async function deleteRepair(id) {
    const user = getUser();
    if (!user) return;

    if (!confirm('Delete this repair record?')) return;

    try {
        const res = await fetch(`${API}/repairs/delete.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, user_id: user.id })
        });

        const data = await res.json();
        if (data.success) loadRepairs();
        else alert(data.message);

    } catch (err) {
        alert('Connection error.');
    }
}
function checkIOSInstall() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.navigator.standalone;
    const dismissed = localStorage.getItem('ios_banner_dismissed');

    if (isIOS && !isStandalone && !dismissed) {
        document.getElementById('iosInstallBanner').style.display = 'block';
    }
}

function closeIOSBanner() {
    document.getElementById('iosInstallBanner').style.display = 'none';
    localStorage.setItem('ios_banner_dismissed', 'true');
}
// SETTINGS

async function loadSettings() {
    const user = getUser();
    if (!user) return;

    try {
        const res = await fetch(`${API}/user/get.php?user_id=${user.id}`);
        const data = await res.json();

        if (!data.success) return;

        const u = data.data;

        // header card
        const avatar = document.getElementById('settingsAvatar');
        const name = document.getElementById('settingsName');
        const email = document.getElementById('settingsEmail');
        if (avatar) avatar.textContent = u.name.charAt(0).toUpperCase();
        if (name) name.textContent = u.name;
        if (email) email.textContent = u.email;

        // form fields
        document.getElementById('settingsFullName').value = u.name || '';
        document.getElementById('settingsClinicName').value = u.clinic_name || '';
        document.getElementById('settingsPhone').value = u.phone || '';
        document.getElementById('settingsCity').value = u.city || '';
        document.getElementById('settingsAddress').value = u.address || '';

    } catch (err) {
        console.error('Settings load error:', err);
    }
}

async function saveProfile() {
    const user = getUser();
    if (!user) return;

    const name = document.getElementById('settingsFullName').value.trim();
    const clinic_name = document.getElementById('settingsClinicName').value.trim();
    const phone = document.getElementById('settingsPhone').value.trim();
    const city = document.getElementById('settingsCity').value.trim();
    const address = document.getElementById('settingsAddress').value.trim();
    const msg = document.getElementById('profileMsg');

    if (!name || !clinic_name) {
        msg.textContent = 'Name and clinic name are required.';
        msg.className = 'settings-msg error';
        return;
    }

    try {
        const res = await fetch(`${API}/user/update.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.id, name, clinic_name, phone, city, address })
        });

        const data = await res.json();

        if (data.success) {
            // آپدیت localStorage
            const updated = { ...user, name: data.data.name, clinic_name: data.data.clinic_name };
            localStorage.setItem('user', JSON.stringify(updated));

            // آپدیت sidebar
            const userName = document.getElementById('userName');
            const userClinic = document.getElementById('userClinic');
            const userAvatar = document.getElementById('userAvatar');
            const settingsAvatar = document.getElementById('settingsAvatar');
            const settingsName = document.getElementById('settingsName');

            if (userName) userName.textContent = data.data.name;
            if (userClinic) userClinic.textContent = data.data.clinic_name;
            if (userAvatar) userAvatar.textContent = data.data.name.charAt(0).toUpperCase();
            if (settingsAvatar) settingsAvatar.textContent = data.data.name.charAt(0).toUpperCase();
            if (settingsName) settingsName.textContent = data.data.name;

            // آپدیت welcome message
            const welcomeMsg = document.getElementById('welcomeMsg');
            if (welcomeMsg) {
                const welcomeLabels = {
                    en: `Welcome, ${data.data.name}`,
                    de: `Willkommen, ${data.data.name}`,
                    fa: `خوش آمدید، ${data.data.name}`
                };
                welcomeMsg.textContent = welcomeLabels[currentLang] || `Welcome, ${data.data.name}`;
            }

            msg.textContent = 'Profile updated successfully!';
            msg.className = 'settings-msg success';
            setTimeout(() => { msg.textContent = ''; }, 3000);
        } else {
            msg.textContent = data.message;
            msg.className = 'settings-msg error';
        }

    } catch (err) {
        msg.textContent = 'Connection error.';
        msg.className = 'settings-msg error';
    }
}

async function savePassword() {
    const user = getUser();
    if (!user) return;

    const current_password = document.getElementById('currentPassword').value;
    const new_password = document.getElementById('newPassword').value;
    const msg = document.getElementById('passwordMsg');

    if (!current_password || !new_password) {
        msg.textContent = 'Please fill in both fields.';
        msg.className = 'settings-msg error';
        return;
    }

    if (new_password.length < 6) {
        msg.textContent = 'New password must be at least 6 characters.';
        msg.className = 'settings-msg error';
        return;
    }

    try {
        const res = await fetch(`${API}/user/update.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user_id: user.id,
                name: user.name,
                clinic_name: user.clinic_name,
                current_password,
                new_password
            })
        });

        const data = await res.json();

        if (data.success) {
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            msg.textContent = 'Password updated successfully!';
            msg.className = 'settings-msg success';
            setTimeout(() => { msg.textContent = ''; }, 3000);
        } else {
            msg.textContent = data.message;
            msg.className = 'settings-msg error';
        }

    } catch (err) {
        msg.textContent = 'Connection error.';
        msg.className = 'settings-msg error';
    }
}
function showPageDirect(page) {
    const pages = ['dashboard', 'equipment', 'warranty', 'maintenance', 'settings', 'about'];
    pages.forEach(p => {
        const el = document.getElementById(`page-${p}`);
        if (el) {
            if (p === page) {
                el.style.display = 'block';
                el.style.flex = 'none';
            } else {
                el.style.display = 'none';
                el.style.flex = 'none';
            }
        }
    });

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${page}'`)) {
            item.classList.add('active');
        }
    });

    const titles = pageTitles[currentLang] || pageTitles['en'];
    const titleEl = document.getElementById('pageTitle');
    if (titleEl) titleEl.textContent = titles[page] || page;

    if (page === 'warranty') updateWarrantyPage();
    if (page === 'maintenance') populateRepairDevices();
    if (page === 'settings') loadSettings();
}
function updateUpcomingCalibrations() {
    const t = translations[currentLang];
    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const today = new Date();
    today.setHours(0,0,0,0);
    const list = document.getElementById('upcomingList');
    const badge = document.getElementById('upcomingCount');
    if (!list || !badge) return;

    const items = [];

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const location = row.cells[1].textContent;
        const nextDate = row.cells[3].textContent;
        if (!nextDate || nextDate === '-') return;

        const nDate = new Date(nextDate);
        const diff = Math.ceil((nDate - today) / (1000 * 60 * 60 * 24));

        if (diff >= 0 && diff <= 30) {
            items.push({ name, location, nextDate, diff });
        }
    });

    items.sort((a, b) => a.diff - b.diff);
    badge.textContent = items.length;

    if (items.length === 0) {
        list.innerHTML = `<div class="no-results">${t.upcoming_empty}</div>`;
        return;
    }

    list.innerHTML = '';
    items.forEach(item => {
        const urgencyClass = item.diff <= 3 ? 'urgent' : item.diff <= 7 ? 'warning' : 'normal';
        const icon = item.diff <= 3 ? '🔴' : item.diff <= 7 ? '🟡' : '🟢';

        let daysText = '';
        if (item.diff === 0) daysText = t.upcoming_today;
        else if (item.diff === 1) daysText = t.upcoming_tomorrow;
        else daysText = `${item.diff} ${t.upcoming_days_left}`;

        const el = document.createElement('div');
        el.className = 'upcoming-item';
        el.onclick = () => showPageDirect('equipment');
        el.innerHTML = `
            <div class="upcoming-item-left">
                <div class="upcoming-item-icon ${urgencyClass}">${icon}</div>
                <div>
                    <div class="upcoming-item-name">${item.name}</div>
                    <div class="upcoming-item-location">${item.location}</div>
                </div>
            </div>
            <div class="upcoming-item-right">
                <div class="upcoming-days ${urgencyClass}">${daysText}</div>
                <div class="upcoming-date">${item.nextDate}</div>
            </div>
        `;
        list.appendChild(el);
    });
}

// REPORTS
let reportStatusChart = null;
let reportWarrantyChart = null;
let reportRepairChart = null;

async function loadReports() {
    const user = getUser();
    if (!user) return;

    const rows = document.querySelectorAll('#equipmentBody tr:not(#noResults)');
    const today = new Date();
    today.setHours(0,0,0,0);

    // Stats
    const total = rows.length;
    const active = document.querySelectorAll('#equipmentBody .status.good').length;
    const needs = document.querySelectorAll('#equipmentBody .status.warning').length;
    const out = document.querySelectorAll('#equipmentBody .status.danger').length;

    let warrantyExpiring = 0;
    rows.forEach(row => {
        const warranty = row.getAttribute('data-warranty');
        if (!warranty || warranty === '-' || warranty === 'null') return;
        const diff = Math.ceil((new Date(warranty) - today) / (1000 * 60 * 60 * 24));
        if (diff >= 0 && diff <= 30) warrantyExpiring++;
    });

// Repair count از ردیف‌های موجود
// Repair count و cost واقعی از API
    let totalRepairs = 0;
    let monthlyData = {};
    try {
        const equipIds = Array.from(rows).map(r => r.getAttribute('data-id')).filter(id => id);
        let allRepairs = [];

        for (const eqId of equipIds) {
            const res = await fetch(`${API}/repairs/get.php?equipment_id=${eqId}&user_id=${user.id}`);
            const data = await res.json();
            if (data.success) allRepairs = allRepairs.concat(data.data);
        }

        totalRepairs = allRepairs.length;

        allRepairs.forEach(r => {
            const d = new Date(r.repair_date);
            const key = `${d.getFullYear()}-${d.getMonth()}`;
            monthlyData[key] = (monthlyData[key] || 0) + parseFloat(r.cost || 0);
        });
    } catch (e) {
        console.error('Repair data error:', e);
    }
    // Update stats
    document.getElementById('reportTotal').textContent = total;
    document.getElementById('reportActive').textContent = active;
    document.getElementById('reportNeeds').textContent = needs;
    document.getElementById('reportOut').textContent = out;
    document.getElementById('reportRepairs').textContent = totalRepairs;
    document.getElementById('reportWarrantyExpiring').textContent = warrantyExpiring;

    // Status Chart
    const t = translations[currentLang];
    if (reportStatusChart) reportStatusChart.destroy();
    const ctx1 = document.getElementById('reportStatusChart').getContext('2d');
    reportStatusChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: [t.status_active, t.status_needs_check, t.status_out],
            datasets: [{
                data: [active, needs, out],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 11 }, color: '#666', padding: 12 }
                }
            }
        }
    });

    // Warranty Chart
    let warrantyValid = 0, warrantyExpired = 0, warrantyExpiringSoon = 0, warrantyNone = 0;
    rows.forEach(row => {
        const warranty = row.getAttribute('data-warranty');
        if (!warranty || warranty === '-' || warranty === 'null') { warrantyNone++; return; }
        const diff = Math.ceil((new Date(warranty) - today) / (1000 * 60 * 60 * 24));
        if (diff < 0) warrantyExpired++;
        else if (diff <= 30) warrantyExpiringSoon++;
        else warrantyValid++;
    });

    if (reportWarrantyChart) reportWarrantyChart.destroy();
    const ctx2 = document.getElementById('reportWarrantyChart').getContext('2d');
    reportWarrantyChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: [t.warranty_ok, t.warranty_expiring, t.warranty_expired, 'No Warranty'],
            datasets: [{
                data: [warrantyValid, warrantyExpiringSoon, warrantyExpired, warrantyNone],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444', '#94a3b8'],
                borderWidth: 0,
                hoverOffset: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { font: { size: 11 }, color: '#666', padding: 12 }
                }
            }
        }
    });

    // Repair Cost Bar Chart
const months = [];
    const costs = [];
    for (let i = 5; i >= 0; i--) {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        const key = `${d.getFullYear()}-${d.getMonth()}`;
        months.push(d.toLocaleString('default', { month: 'short' }));
        costs.push(monthlyData[key] || 0);
    }

    if (reportRepairChart) reportRepairChart.destroy();
    const ctx3 = document.getElementById('reportRepairChart').getContext('2d');
    reportRepairChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: t.report_repair_cost,
                data: costs,
                backgroundColor: 'rgba(26,115,232,0.7)',
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(0,0,0,0.05)' },
                    ticks: { font: { size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 11 } }
                }
            }
        }
    });

    // Upcoming Calibrations Table
    const tbody = document.getElementById('reportCalibrationBody');
    tbody.innerHTML = '';
    const upcoming = [];

    rows.forEach(row => {
        const name = row.cells[0].textContent;
        const location = row.cells[1].textContent;
        const nextDate = row.cells[3].textContent;
        const statusEl = row.cells[4].querySelector('.status');
        const status = statusEl ? statusEl.textContent : '-';
        const statusClass = statusEl ? statusEl.className.replace('status ', '') : '';

        if (!nextDate || nextDate === '-') return;
        const diff = Math.ceil((new Date(nextDate) - today) / (1000 * 60 * 60 * 24));
        if (diff >= 0 && diff <= 60) upcoming.push({ name, location, nextDate, status, statusClass, diff });
    });

    upcoming.sort((a, b) => a.diff - b.diff);

    if (upcoming.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="no-results">${t.upcoming_empty}</td></tr>`;
    } else {
        upcoming.forEach(item => {
            const urgency = item.diff <= 3 ? 'danger' : item.diff <= 7 ? 'warning' : 'good';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.name}</td>
                <td>${item.location}</td>
                <td>${item.nextDate}</td>
                <td><span class="status ${item.statusClass}">${item.status}</span></td>
                <td><span class="status ${urgency}">${item.diff} ${t.report_days_left}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }
}