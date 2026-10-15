(() => {
  const themes = [
    ['tokyonight-night', 'TokyoNight Night'],
    ['catppuccin-mocha', 'Catppuccin Mocha'],
    ['everforest', 'Everforest'],
    ['nord', 'Nord'],
    ['one-dark', 'One Dark'],
  ];
  const storageKey = 'portfolio-theme';
  let current = 0;
  try {
    const saved = localStorage.getItem(storageKey);
    const index = themes.findIndex(([id]) => id === saved);
    if (index >= 0) current = index;
  } catch { /* Themes still work when browser storage is unavailable. */ }
  const apply = () => {
    document.documentElement.dataset.theme = themes[current][0];
  };
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (!logo) return;
    const updateLabel = () => {
      logo.title = `${themes[current][1]} · Click to change theme`;
      logo.setAttribute('aria-label', `Kedar Dinde home; current theme ${themes[current][1]}; activate for ${themes[(current + 1) % themes.length][1]}`);
    };
    updateLabel();
    logo.addEventListener('click', (event) => {
      // Preserve native link behavior for opening the home anchor in another tab.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      document.documentElement.classList.add('theme-animated');
      current = (current + 1) % themes.length;
      apply();
      updateLabel();
      try { localStorage.setItem(storageKey, themes[current][0]); } catch { /* Optional persistence. */ }
      const status = document.getElementById('theme-status');
      if (status) status.textContent = `Theme changed to ${themes[current][1]}`;
    });
  });
})();
