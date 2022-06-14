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
  }

  function closeModalEscape(event) {
    if (event.code === 'Escape') {
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
