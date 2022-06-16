(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-open]'),
    closeModalBtn: document.querySelector('[data-team-close]'),
    modal: document.querySelector('[data-team]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrops--hidden');
    window.addEventListener('keydown', closeModalEscape);
    refs.modal.removeEventListener('click', closeModalBackdrop);
  }

  refs.modal.addEventListener('click', closeModalBackdrop);

  function closeModalEscape(event) {
    if (event.code === 'Escape') {
      toggleModal();
    }
  }
  function closeModalBackdrop(event) {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  }
  refs.modal.addEventListener('click', closeModalScreen);

  function closeModalScreen(event) {
    if (!event.target.classList.contains('backdrops--hidden')) {
      return;
    }
    toggleModal();
  }
})();
