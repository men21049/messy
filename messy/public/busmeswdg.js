(function () {
  if (window.__BusinessMessages) return;
  window.__BusinessMessages = true;

  // Slide-in CSS
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .upsell-slide-in {
      animation: slideInRight 0.6s ease forwards;
    }
  `;
  document.head.appendChild(style);

  // Alert element
  const alert = document.createElement('div');
  alert.className = 'alert alert-info position-fixed bottom-0 end-0 m-3 upsell-slide-in';
  alert.setAttribute('role', 'alert');
  alert.style.zIndex = 9999;

  alert.innerHTML = `
    <div>
      <button type="button" class="btn-close" aria-label="Close"></button>
      <strong>This is a message</strong>
      <ul class="mb-0">
        <li>The Possibilities are endless</li>
        <li>This small application can even become a SAAS!!</li>
      </ul>
    </div>
  `;

  document.body.appendChild(alert);

  // Close button logic
  const closeButton = alert.querySelector('.btn-close');
  closeButton.addEventListener('click', () => {
    alert.style.transition = 'opacity 0.3s ease';
    alert.style.opacity = 0;
    setTimeout(() => alert.remove(), 300);
  });

  // Delay the appearance
  alert.style.opacity = 0;
  setTimeout(() => {
    alert.style.opacity = 1;
  }, 1000);
})();