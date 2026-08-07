(() => {
  const dialog = document.querySelector('#image-lightbox');
  const dialogImage = document.querySelector('#image-lightbox-img');
  const dialogCaption = document.querySelector('#image-lightbox-caption');
  const counter = document.querySelector('#image-lightbox-counter');
  const prev = document.querySelector('[data-lightbox-prev]');
  const next = document.querySelector('[data-lightbox-next]');
  const close = document.querySelector('[data-lightbox-close]');
  const images = [...document.querySelectorAll('[data-lightbox-image], .post-body img')]
    .filter((image, index, list) => list.indexOf(image) === index && !image.closest('.image-lightbox'));

  if (!dialog || !dialogImage || images.length === 0) return;

  let activeIndex = 0;

  const captionFor = (image) => {
    const figure = image.closest('figure');
    const figcaption = figure?.querySelector('figcaption');
    return figcaption?.textContent?.trim() || image.alt || '';
  };

  const showImage = (index) => {
    activeIndex = (index + images.length) % images.length;
    const image = images[activeIndex];
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt || '';
    const caption = captionFor(image);
    dialogCaption.textContent = caption;
    dialogCaption.hidden = !caption;
    counter.textContent = images.length > 1 ? `${activeIndex + 1} / ${images.length}` : '';
    prev.hidden = images.length < 2;
    next.hidden = images.length < 2;
  };

  const openImage = (index) => {
    showImage(index);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  };

  images.forEach((image, index) => {
    image.classList.add('zoomable-image');
    image.setAttribute('role', 'button');
    image.setAttribute('tabindex', '0');
    image.setAttribute('aria-label', `${image.alt || 'Imagen'}. Abrir imagen ampliada`);
    image.setAttribute('aria-haspopup', 'dialog');
    image.addEventListener('click', (event) => {
      event.preventDefault();
      openImage(index);
    });
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImage(index);
      }
    });
  });

  prev?.addEventListener('click', () => showImage(activeIndex - 1));
  next?.addEventListener('click', () => showImage(activeIndex + 1));
  close?.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (event.key === 'ArrowRight') showImage(activeIndex + 1);
  });

  const copyButton = document.querySelector('[data-copy-citation]');
  const citation = document.querySelector('#recommended-citation');
  const status = document.querySelector('#citation-status');

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };

  copyButton?.addEventListener('click', async () => {
    if (!citation) return;
    try {
      await copyText(citation.textContent.trim());
      copyButton.textContent = 'Cita copiada';
      if (status) status.textContent = 'La cita se copió al portapapeles.';
      window.setTimeout(() => {
        copyButton.textContent = 'Copiar cita';
        if (status) status.textContent = '';
      }, 2200);
    } catch {
      if (status) status.textContent = 'No se pudo copiar automáticamente. Selecciona la cita y cópiala manualmente.';
    }
  });
})();
