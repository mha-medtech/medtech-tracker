function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(user);
}

function logout() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}

function getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

const logoutLabels = {
    en: 'Sign out',
    de: 'Abmelden',
    fa: 'خروج'
};

const currentUser = checkAuth();

if (currentUser) {
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('header');
        if (header) {
            const userInfo = document.createElement('div');
            userInfo.className = 'user-info';
            userInfo.id = 'userInfoBar';

            const lang = getLang();
            const logoutText = logoutLabels[lang] || 'Sign out';

            userInfo.innerHTML = `
                <span class="user-clinic">${currentUser.clinic_name}</span>
                <button class="logout-btn" id="logoutBtn" onclick="logout()">${logoutText}</button>
            `;

            const headerActions = header.querySelector('.header-actions');
            if (headerActions) {
                headerActions.prepend(userInfo);
            } else {
                header.appendChild(userInfo);
            }
        }
    });
}