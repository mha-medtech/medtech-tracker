const API = 'https://medtracker.freedev.app/api';

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

    if (!email || !password) {
        showMsg('loginMsg', 'Please fill in all fields.', 'error');
        return;
    }

    const btn = document.querySelector('#loginForm .btn');
    btn.textContent = 'Signing in...';
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
            btn.textContent = 'Sign in';
            btn.disabled = false;
        }

    } catch (err) {
        showMsg('loginMsg', 'Connection error. Please try again.', 'error');
        btn.textContent = 'Sign in';
        btn.disabled = false;
    }
}

async function register() {
    const name = document.getElementById('regName').value.trim();
    const clinic = document.getElementById('regClinic').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!name || !clinic || !email || !password) {
        showMsg('registerMsg', 'Please fill in all fields.', 'error');
        return;
    }

    if (password.length < 6) {
        showMsg('registerMsg', 'Password must be at least 6 characters.', 'error');
        return;
    }

    const btn = document.querySelector('#registerForm .btn');
    btn.textContent = 'Creating account...';
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
        btn.textContent = 'Create account';
        btn.disabled = false;
    }
}

// اگه کاربر لاگین کرده بود مستقیم بره داشبورد
window.onload = function() {
    const user = localStorage.getItem('user');
    if (user) window.location.href = 'dashboard.html';
}