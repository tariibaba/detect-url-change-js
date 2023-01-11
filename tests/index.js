import detectUrlChange from '../src/index';
const changeUrlBtn = document.getElementById('btn-change-url');
changeUrlBtn.addEventListener('click', () => {
  const url = 'new-url.html';
  window.history.pushState({}, '', url);
});

const urlChangeIndicator = document.getElementById('url-change-indicator');
detectUrlChange.on('change', (newUrl) => {
  urlChangeIndicator.textContent = `Url changed: ${newUrl}`;
});
