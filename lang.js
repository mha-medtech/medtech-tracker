const LANG_KEY = 'app_lang';

const supportedLangs = ['en', 'de', 'fa'];

function detectLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved && supportedLangs.includes(saved)) return saved;

    const browser = navigator.language || navigator.userLanguage || 'en';
    const code = browser.toLowerCase().slice(0, 2);

    if (code === 'fa' || code === 'ar') return 'fa';
    if (code === 'de' || code === 'at' || code === 'ch') return 'de';
    return 'en';
}

function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
}

function getLang() {
    return localStorage.getItem(LANG_KEY) || detectLang();
}