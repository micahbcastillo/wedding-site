(function () {
  const LS_KEY = 'site_lang';

  function getLang() {
    try {
      const v = localStorage.getItem(LS_KEY);
      if (v === 'en' || v === 'es') return v;
    } catch (_) {}
    return 'en';
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    document.documentElement.setAttribute('data-lang', lang);
    try { localStorage.setItem(LS_KEY, lang); } catch (_) {}
    syncLabel(lang);
  }

  function syncLabel(lang) {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const text = (lang === 'en') ? 'Cambiar a español' : 'Switch to English';
    btn.textContent = text;
    btn.title = text;
    btn.setAttribute('aria-label', text);
    btn.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
  }

  function toggleLang() {
    const current = document.documentElement.getAttribute('data-lang') || getLang();
    setLang(current === 'en' ? 'es' : 'en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.addEventListener('click', toggleLang);
    setLang(getLang());
  });
})();