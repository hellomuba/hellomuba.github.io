// Progressive enhancement: the original figure remains available without JavaScript.
(() => {
  const figure = document.querySelector('.case-visual');
  const trigger = figure?.querySelector('.diagram-open');
  if (!trigger || typeof HTMLDialogElement === 'undefined') return;
  const dialog = document.createElement('dialog');
  dialog.className = 'diagram-dialog';
  dialog.setAttribute('aria-label', 'Enlarged engineering workflow');
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'diagram-close';
  close.textContent = 'Close diagram';
  const hint = document.createElement('p');
  hint.textContent = 'Conceptual workflow. Scroll horizontally to inspect the full diagram on smaller screens.';
  const viewport = document.createElement('div');
  viewport.className = 'diagram-viewport';
  viewport.tabIndex = 0;
  viewport.setAttribute('role', 'region');
  viewport.setAttribute('aria-label', 'Scrollable workflow diagram');
  const image = figure.querySelector('img').cloneNode(true);
  viewport.append(image);
  dialog.append(close, hint, viewport);
  document.body.append(dialog);
  trigger.hidden = false;
  trigger.addEventListener('click', () => {
    dialog.showModal();
    document.body.classList.add('diagram-opened');
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('diagram-opened');
    trigger.focus();
  });
})();
