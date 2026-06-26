const API = 'https://medtracker.freedev.app/api';

const loginTranslations = {
    en: {
        tab_signin: "Sign in", tab_register: "Create account",
        welcome: "Welcome back", welcome_sub: "Sign in to your clinic account",
        reg_title: "Create account", reg_sub: "Start managing your clinic's equipment",
        label_email: "Email address", label_password: "Password",
        label_name: "Full name", label_clinic: "Clinic name",
        btn_signin: "Sign in", btn_register: "Create account",
        btn_signing: "Signing in...", btn_creating: "Creating account...",
        ph_email: "clinic@example.com", ph_password2: "••••••••",
        ph_name: "Mohammad Hassan Abbasi", ph_clinic: "Kayazh Medical Clinic",
        ph_password: "Min. 6 characters"
    },
    de: {
        tab_signin: "Anmelden", tab_register: "Konto erstellen",
        welcome: "Willkommen zurück", welcome_sub: "Melden Sie sich bei Ihrem Klinik-Konto an",
        reg_title: "Konto erstellen", reg_sub: "Verwalten Sie die Geräte Ihrer Klinik",
        label_email: "E-Mail-Adresse", label_password: "Passwort",
        label_name: "Vollständiger Name", label_clinic: "Klinikname",
        btn_signin: "Anmelden", btn_register: "Konto erstellen",
        btn_signing: "Anmelden...", btn_creating: "Konto wird erstellt...",
        ph_email: "klinik@beispiel.de", ph_password2: "••••••••",
        ph_name: "Ihr vollständiger Name", ph_clinic: "Name Ihrer Klinik",
        ph_password: "Mind. 6 Zeichen"
    },
    fa: {
        tab_signin: "ورود", tab_register: "ایجاد حساب",
        welcome: "خوش آمدید", welcome_sub: "وارد حساب کلینیک خود شوید",
        reg_title: "ایجاد حساب", reg_sub: "مدیریت تجهیزات کلینیک خود را شروع کنید",
        label_email: "آدرس ایمیل", label_password: "رمز عبور",
        label_name: "نام کامل", label_clinic: "نام کلینیک",
        btn_signin: "ورود", btn_register: "ایجاد حساب",
        btn_signing: "در حال ورود...", btn_creating: "در حال ایجاد حساب...",
        ph_email: "clinic@example.com", ph_password2: "••••••••",
        ph_name: "محمدحسن عباسی", ph_clinic: "کلینیک کیاژ",
        ph_password: "حداقل ۶ کاراکتر"
    }
};

function applyLoginLang(lang) {
    const t = loginTranslations[lang];
    if (!t) return;
    const isRtl = lang === 'fa';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.tab')[0].textContent = t.tab_signin;
    document.querySelectorAll('.tab')[1].textContent = t.tab_register;
    document.querySelector('#loginForm h2').textContent = t.welcome;
    document.querySelector('#loginForm .sub').textContent = t.welcome_sub;
    document.querySelector('#registerForm h2').textContent = t.reg_title;
    document.querySelector('#registerForm .sub').textContent = t.reg_sub;
    document.querySelector('#loginForm .btn').textContent = t.btn_signin;
    document.querySelector('#registerForm .btn').textContent = t.btn_register;
    document.getElementById('loginEmail').placeholder = t.ph_email;
    document.getElementById('loginPassword').placeholder = t.ph_password2;
    document.getElementById('regName').placeholder = t.ph_name;
    document.getElementById('regClinic').placeholder = t.ph_clinic;
    document.getElementById('regEmail').placeholder = t.ph_email;
    document.getElementById('regPassword').placeholder = t.ph_password;

    const labels = document.querySelectorAll('.field label');
    if (labels[0]) labels[0].textContent = t.label_email;
    if (labels[1]) labels[1].textContent = t.label_password;
    if (labels[2]) labels[2].textContent = t.label_name;
    if (labels[3]) labels[3].textContent = t.label_clinic;
    if (labels[4]) labels[4].textContent = t.label_email;
    if (labels[5]) labels[5].textContent = t.label_password;
}

function switchTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    if (tab === 'login') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }
}

function showMsg(id, text, type) {
    const el = document.getElementById(id);
    el.textContent = text;
    el.className = 'msg ' + type;
}

async function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const t = loginTranslations[getLang()];

    if (!email || !password) {
        showMsg('loginMsg', 'Please fill in all fields.', 'error');
        return;
    }

    const btn = document.querySelector('#loginForm .btn');
    btn.textContent = t.btn_signing;
    btn.disabled = true;

    try {
        const res = await fetch(`${API}/auth/login.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            showMsg('loginMsg', 'Success! Redirecting...', 'success');
            setTimeout(() => window.location.href = 'dashboard.html', 1000);
        } else {
            showMsg('loginMsg', data.message, 'error');
            btn.textContent = t.btn_signin;
            btn.disabled = false;
        }

    } catch (err) {
        showMsg('loginMsg', 'Connection error. Please try again.', 'error');
        btn.textContent = t.btn_signin;
        btn.disabled = false;
    }
}

async function register() {
    const name = document.getElementById('regName').value.trim();
    const clinic = document.getElementById('regClinic').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const t = loginTranslations[getLang()];

    if (!name || !clinic || !email || !password) {
        showMsg('registerMsg', 'Please fill in all fields.', 'error');
        return;
    }

    if (password.length < 6) {
        showMsg('registerMsg', 'Password must be at least 6 characters.', 'error');
        return;
    }

    const btn = document.querySelector('#registerForm .btn');
    btn.textContent = t.btn_creating;
    btn.disabled = true;

    try {
        const res = await fetch(`${API}/auth/register.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, clinic_name: clinic })
        });

        const data = await res.json();

        if (data.success) {
            showMsg('registerMsg', 'Account created! Please sign in.', 'success');
            setTimeout(() => switchTab('login'), 1500);
        } else {
            showMsg('registerMsg', data.message, 'error');
        }

    } catch (err) {
        showMsg('registerMsg', 'Connection error. Please try again.', 'error');
    } finally {
        btn.textContent = t.btn_register;
        btn.disabled = false;
    }
}

window.onload = function() {
    const user = localStorage.getItem('user');
    if (user) window.location.href = 'dashboard.html';
    applyLoginLang(getLang());
}