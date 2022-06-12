(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-fran-open]"),
      closeModalBtn: document.querySelector("[data-fran-close]"),
      modal: document.querySelector("[data-fran]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrops--hidden");
    }
  })();