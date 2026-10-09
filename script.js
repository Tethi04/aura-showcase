document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Live Clock Timer
  const timePill = document.getElementById('live-time');
  function updateTime() {
    if (!timePill) return;
    const now = new Date();
    timePill.textContent = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  setInterval(updateTime, 1000);
  updateTime();

  // 2. Copy Live URL Helper
  const copyBtn = document.getElementById('copy-btn');
  const siteUrlInput = document.getElementById('site-url');

  if (copyBtn && siteUrlInput) {
    copyBtn.addEventListener('click', () => {
      siteUrlInput.select();
      navigator.clipboard.writeText(siteUrlInput.value).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✨';
        copyBtn.style.background = '#4caf50';

        setTimeout(() => {
          copyBtn.textContent = originalText;
          copyBtn.style.background = '';
        }, 2000);
      });
    });
  }
});
