(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    container: document.querySelector('.modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  window.addEventListener('keydown', closeModalEsc);
  function closeModalEsc(event) {
    if (event.code !== 'Escape') {
      return;
    }
    toggleModal();
  }

  //   refs.container.addEventListener('click', closeModalIsHidden);
  //   function closeModalIsHidden(event) {
  //     if (event !== refs.modal) {
  //       return;
  //     }
  //     toggleModal();
  //   }
})();
